const form = document.querySelector('form');
		const table = document.querySelector('#contacts tbody');
		let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const name = document.querySelector('#name').value;
			const email = document.querySelector('#email').value;
			const phone = document.querySelector('#phone').value;

			const contact = {
				name,
				email,
				phone
			};

			contacts.push(contact);
			localStorage.setItem('contacts', JSON.stringify(contacts));

			addRow(contact);
			form.reset();
		});

		function addRow(contact) {
			const row = document.createElement('tr');
			const nameCell = document.createElement('td');
			const emailCell = document.createElement('td');
			const phoneCell = document.createElement('td');

			nameCell.textContent = contact.name;
			emailCell.textContent = contact.email;
			phoneCell.textContent = contact.phone;

			row.appendChild(nameCell);
			row.appendChild(emailCell);
			row.appendChild(phoneCell);

			table.appendChild(row);
		}

		// Adicionar contatos já existentes ao carregar a página
		for (let i = 0; i < contacts.length; i++) {
			addRow(contacts[i]);
		}