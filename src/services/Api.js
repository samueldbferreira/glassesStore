export const API_URL = "http://localhost:3000";

export function GET_USER(email, password) {
  return {
    url: `${API_URL}/users?email=${email}&password=${password}`,
    options: {
      method: "GET",
    },
  };
}

export function GET_CUSTOMERS() {
  return {
    url: `${API_URL}/users?admin=false`,
    options: {
      method: "GET",
    },
  };
}

export function GET_PRODUCTS(category) {
  return {
    url: category
      ? `${API_URL}/products?category=${category}`
      : `${API_URL}/products`,
    options: {
      method: "GET",
    },
  };
}

export function GET_PRODUCT(id) {
  return {
    url: `${API_URL}/products?id=${id}`,
    options: {
      method: "GET",
    },
  };
}
