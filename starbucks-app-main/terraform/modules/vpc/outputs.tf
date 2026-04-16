output "vpc_id" {
  value = aws_vpc.main.id
}

output "public_subnets_ids" {
  value = aws_subnet.public_1a[*].id
}

output "private_subnets_ids" {
  value = aws_subnet.private_1a[*].id
}

output "public_subnets" {
  value = aws_subnet.public_1a[*].id
}

output "private_subnets" {
  value = aws_subnet.private_1a[*].id
}

output "nat_gateway_ids" {
  value = aws_nat_gateway.nat_gw[*].id
}

output "availability_zones" {
  value = var.azs
}
