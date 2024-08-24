import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => {

    // Consultara 3 viajes del modelo Viaje
    try {

        // const promiseDB = [];

        // promiseDB.push( Viaje.findAll({limit: 3}) );
        // promiseDB.push( Testimonial.findAll({limit: 3}) );
        const resultado = await Promise.all([Viaje.findAll({limit: 3}), Testimonial.findAll({limit: 3})])

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

    
}

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    });

}

const paginaViajes = async (req, res) => {

    // Consultar DB
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });

}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Tetimoniales',
            testimoniales
        });
    } catch (error) {
        
    }

}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
    
    try {
        // Obtenemos el slug de los parametros
        const { slug } = req.params;
        // Filtramos por la columna de 'slug', donde éste tiene que ser igual al 'slug' que estamos solicitando en el link
        const viaje = await Viaje.findOne( { where : { slug } } );

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}