const fs = require('fs');

class Contenedor {
	constructor(file) {
		this.file = file;
}

	async save(producto){
		try {
			const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');

			let productos = [];

			if(contenido === ''){
			producto.id = 1;
			productos.push(producto);
			} else {
				const listaDeProductos = JSON.parse(contenido);

				producto.id = listaDeProductos[listaDeProductos.length - 1].id + 1;
				listaDeProductos.push(producto);
				productos = listaDeProductos;
			}

		const productosString = JSON.stringify(productos, null, 2);
		await fs.promises.writeFile(`./${this.file}`, productosString);

		return producto.id;
		
	} catch(error) {
		console.log('Error: ', error);
		};
	}



	async getByID(idRequested){
		try {
			const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');

			const listaDeProductos = JSON.parse(contenido);
			let result = listaDeProductos.filter(items => items.id == idRequested);

			if(listaDeProductos === '' || result == ''){
				return null;
			} else {
				return result;
				}
	
	} catch(error) {
		console.log('Error: ', error);
		};
	
	};

	
	async getAll(){
		try{
			const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');
			const listaDeProductos = JSON.parse(contenido);
			return listaDeProductos;
		} catch(error) {
			console.log('Error: ', error);
		}

	};

	async deleteById(deleteId){
		try {
			const contenido = await fs.promises.readFile(`./${this.file}`, 'utf-8');

			const listaDeProductos = JSON.parse(contenido);

			let newArray = listaDeProductos.filter(items => items.id !== deleteId);

				const productosString = JSON.stringify(newArray, null, 2);
	
				await fs.promises.writeFile(`./${this.file}`, productosString);

		} catch(error) {
			console.log('Error: ', error);
			};
	
	};

	async deleteAll(){
		try{
			const contenido = await fs.promises.writeFile(`./${this.file}`, '');
		} catch(error) {
			console.log('Error: ', error);
		}
	}
}


module.exports = Contenedor;