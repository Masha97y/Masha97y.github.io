let cart = [];

function addToCart(name, price) {
	let item = {
		name: name,
		price: price
	};
	cart.push(item);
	updateCart();
}

function updateCart() {
	let cartItems = document.getElementById('cart-items');
	cartItems.innerHTML = '';
	for (let i = 0; i < cart.length; i++) {
		let li = document.createElement('li');
		let name = document.createElement('span');
		name.innerText = cart[i].name;
		let price = document.createElement('span');
		price.innerText = '$' + cart[i].price.toFixed(2);
		let removeButton = document.createElement('button');
		removeButton.innerText = 'Remove';
		removeButton.onclick = function() {
			removeFromCart(i);
		}
		li.appendChild(name);
		li.appendChild(price);
		li.appendChild(removeButton);
		cartItems.appendChild(li);
	}
	let total = cart.reduce(function(acc, val) {
		return acc + val.price;
	}, 0);
	document.getElementById('cart-total').innerText = 'Total: $' + total.toFixed(2);
}

function removeFromCart(index) {
	cart.splice(index, 1);
	updateCart();
}

function checkout() {
	// Implement checkout functionality here
	alert('Thank you for your purchase!');
	cart = [];
	updateCart();
}