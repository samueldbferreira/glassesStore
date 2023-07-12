export const URL_BASE = "http://localhost:3333";

export function POST_PRODUCT(formData) {
	return {
		url: `${URL_BASE}/produtos`,
		options: {
			method: "POST",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
			body: formData,
		},
	};
}

export function GET_PRODUCT(id) {
	return {
		url: `${URL_BASE}/produtos/${id}`,
		options: {
			method: "GET",
		},
	};
}

export function GET_PRODUCTS(category) {
	return {
		url: category
			? `${URL_BASE}/produtos?categoria=${category}`
			: `${URL_BASE}/produtos`,
		options: {
			method: "GET",
		},
	};
}

export function PATCH_PRODUCT(id, formData) {
	return {
		url: `${URL_BASE}/produtos/${id}`,
		options: {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
			body: formData,
		},
	};
}

export function DELETE_PRODUCT(id) {
	return {
		url: `${URL_BASE}/produtos/${id}`,
		options: {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function POST_LOGIN(body) {
	return {
		url: `${URL_BASE}/auth/entrar`,
		options: {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function GET_ME(token) {
	return {
		url: `${URL_BASE}/me`,
		options: {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		},
	};
}

export function PATCH_ME(body) {
	return {
		url: `${URL_BASE}/me`,
		options: {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function DELETE_USER(id) {
	return {
		url: `${URL_BASE}/usuarios/${id}`,
		options: {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function GET_USER(id) {
	return {
		url: `${URL_BASE}/usuarios/${id}`,
		options: {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function GET_USERS() {
	return {
		url: `${URL_BASE}/usuarios`,
		options: {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function POST_USER(body) {
	return {
		url: `${URL_BASE}/auth/cadastro`,
		options: {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function DELETE_ADDRESS(id) {
	return {
		url: `${URL_BASE}/enderecos/${id}`,
		options: {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function PATCH_ADDRESS(id, body) {
	return {
		url: `${URL_BASE}/enderecos/${id}`,
		options: {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function POST_ADDRESS(body) {
	return {
		url: `${URL_BASE}/enderecos`,
		options: {
			method: "POST",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	};
}

export function GET_ADDRESSES() {
	return {
		url: `${URL_BASE}/enderecos`,
		options: {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}

export function POST_ORDER(total, items) {
	return {
		url: `${URL_BASE}/pedidos`,
		options: {
			method: "POST",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				total,
				items,
			}),
		},
	};
}

export function GET_ORDERS() {
	return {
		url: `${URL_BASE}/pedidos`,
		options: {
			method: "GET",
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem("token")}`,
			},
		},
	};
}
