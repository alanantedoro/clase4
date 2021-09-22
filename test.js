const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('productos.json');

console.log(contenedor);

const productoNuevo = {
    name: 'lapicera',
    price: 60,
    thumbnail: "https://www.bikabik.com.ar/wp-content/uploads/2020/07/boligrafo-lapicera-faber-castell-trilux-032-azul-D_NQ_NP_859749-MLA33050396300_112019-F-min.jpg"
};


const main = async () => {
    const id = await contenedor.save(productoNuevo);

    console.log(id);

    const list = await contenedor.getAll();

    console.log(list);

    const search = await contenedor.getByID();

    console.log(search);

    const deleteOne = await contenedor.deleteById(2);

    console.log(deleteOne);
}

main();