output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.vpc.vpc_id
}
output "private_subnets" {
  description = "List of IDs of private subnets"
  value       = module.vpc.private_subnets
}
output "public_subnets" {
  description = "List of IDs of public subnets"
  value       = module.vpc.public_subnets
}
output "nat_gateway_ids" {
  description = "List of IDs of NAT Gateways"
  value       = module.vpc.nat_gateway_ids
}
output "availability_zones" {
  description = "List of availability zones used by the VPC"
  value       = module.vpc.availability_zones
}

output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}