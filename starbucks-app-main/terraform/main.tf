module "vpc" {
  source = "./modules/vpc"

  vpc_name        = var.vpc_name
  vpc_cidr        = var.vpc_cidr
  private_subnets = var.private_subnets
  public_subnets  = var.public_subnets
  azs             = var.azs
  cluster_name    = var.cluster_name

  enable_nat_gateway = true
  single_nat_gateway = true

  public_subnet_tags = {
    "kubernetes.io/role/elb"                    = "1"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
  }

  private_subnet_tags = {
    "kubernetes.io/role/internal-elb"           = "1"
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
  }

  tags = {
    Environment = var.environment
    Terraform   = "true"
  }
}
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 21.0"

  name               = "starter-eks-cluster"
  kubernetes_version = "1.31"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  enable_cluster_creator_admin_permissions = true

  # Addons
  addons = {
    coredns = {
      most_recent = true
    }
    kube-proxy = {
      most_recent = true
    }
    aws-ebs-csi-driver = {
      most_recent = true
    }
    vpc-cni = {
      most_recent    = true
      before_compute = true
    }
    vpc-cni = {
      most_recent    = true
      before_compute = true
    }
  }

  # Node Group
  eks_managed_node_groups = {
    example = {
      instance_types = ["t3.medium"]
      min_size       = 2
      max_size       = 3
      desired_size   = 2
      ami_type       = "AL2_x86_64"
      capacity_type  = "ON_DEMAND"
    }
  }                               #  closes eks_managed_node_groups

  # Security Group Rules - inside correct block!
  node_security_group_additional_rules = {

    ingress_web = {
      description = "Web traffic"
      protocol    = "tcp"
      from_port   = 80
      to_port     = 80
      type        = "ingress"
      cidr_blocks = ["0.0.0.0/0"]  # public web traffic
    }

    ingress_app = {
      description = "App port 5000"
      protocol    = "tcp"
      from_port   = 5000
      to_port     = 5000
      type        = "ingress"
      cidr_blocks = [var.vpc_cidr]  #  internal only
    }

    ingress_mongo_express = {
      description = "Mongo Express"
      protocol    = "tcp"
      from_port   = 8081
      to_port     = 8081
      type        = "ingress"
      cidr_blocks = [var.vpc_cidr]  #  internal only
    }

    ingress_mongo = {
      description = "MongoDB internal"
      protocol    = "tcp"
      from_port   = 27017
      to_port     = 27017
      type        = "ingress"
      cidr_blocks = [var.vpc_cidr]  # internal only - never public!
    }

    egress_all = {
      description = "Allow all outbound"
      protocol    = "-1"
      from_port   = 0
      to_port     = 0
      type        = "egress"
      cidr_blocks = ["0.0.0.0/0"]
    }
  }                               #  closes node_security_group_additional_rules

  tags = {
    Environment = "dev"
    Terraform   = "true"
  }
}