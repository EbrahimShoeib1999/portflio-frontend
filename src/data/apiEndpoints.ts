import type { ApiEndpoint } from '../types/api';

export const apiEndpoints: ApiEndpoint[] = [
  {
    id: 'auth-login',
    method: 'POST',
    path: '/api/v1/auth/login',
    title: 'User Authentication',
    description: 'Authenticate users with JWT tokens for secure API access.',
    request: 'JSON body with email and password',
    response: 'JWT access token and refresh token',
    version: 'v1.0',
  },
  {
    id: 'products-list',
    method: 'GET',
    path: '/api/v1/products',
    title: 'List Products',
    description: 'Retrieve paginated list of products with filtering and sorting.',
    request: 'Query params: page, limit, category, search',
    response: 'Array of product objects with metadata',
    version: 'v1.0',
  },
  {
    id: 'orders-create',
    method: 'POST',
    path: '/api/v1/orders',
    title: 'Create Order',
    description: 'Process new orders with inventory validation and payment integration.',
    request: 'JSON body with items, shipping, billing info',
    response: 'Order confirmation with tracking ID',
    version: 'v1.0',
  },
  {
    id: 'users-update',
    method: 'PUT',
    path: '/api/v1/users/:id',
    title: 'Update User Profile',
    description: 'Update user information with role-based access control.',
    request: 'JSON body with updated user fields',
    response: 'Updated user object',
    version: 'v1.0',
  },
];
