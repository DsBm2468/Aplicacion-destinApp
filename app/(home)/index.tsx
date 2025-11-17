import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router, Tabs } from "expo-router";

//ESTILOS
const styles = StyleSheet.create({
  PrincipalContainer: { //Grupo de elementos
    // flex: 1,
    backgroundColor: '#000000'
  },
  titulo: {
    color: '#ffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 20
  },
  subtitulo: {
    color: '#ffff',
    fontSize: 22,
    fontWeight: 'bold',
    // textAlign: 'justify',
    textAlign: 'center',
    marginBottom: 25
    // paddingBottom: 22,
  },
  subtituloInferior: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: 'bold',
    // textAlign: 'justify',
    textAlign: 'center',
    //marginBottom: 10,
    // marginTop: 20
    // paddingLeft: 0,
    // paddingRight: 390,
    // paddingBottom: 22,
  },
  parrafoInfo: {
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    // textAlign: 'justify',
    textAlign: 'center',
    // position: 'static',
    position: 'relative',
    // marginTop: 5
    // left: 95, //vh es viewport height
    // bottom: 19,
    // paddingLeft: 0,
    // paddingRight: 390,
    // bottom:5, //vh es viewport height
  },
  containerCarrusel: {
    backgroundColor: '#222222ff',
    borderColor: '#464545ff',
    borderRadius: 10,
    borderWidth: 2,
    // padding: 25,
    padding: 20,
    margin: 10,
  },
  contenidoCarrusel: {
    flexDirection: 'row',  // Pone elementos en fila horizontal
    alignItems: 'center',  // Centra verticalmente
    justifyContent: 'space-between',
    // zIndex: 1 // Se asegura de que ese elemento aparezca visualmente encima de cualquier otro elemento que se solape y tenga un zIndex de 0 o auto
  },
  imageContainer: { //Mantiene la imagen centrada entrre las flechas
    flex: 1,                    // Ocupa todo el espacio disponible
    alignItems: 'center',       // Centra la imagen horizontalmente
    marginHorizontal: 10,       // 10px de espacio a izquierda y derecha
    // zIndex: -1 // Asegurar que la imagen no tape las flechas
    position: 'relative',
    height: 200,
    justifyContent: 'center'
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 10
  },
  // containerInfoTarjetas: {
  //   // fontSize: 15,
  //   color: '#ffff',
  //   // padding: 7,
  //   paddingHorizontal: 5,
  //   // textAlign: 'justify'
  //   textAlign: 'center',
  //   marginTop: 15
  // },
  containerInfoTarjetas: {
    paddingHorizontal: 5,
    textAlign: 'center',
    marginTop: 15
  },
  botonflechas: {
    backgroundColor: '#727272ff',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    borderRadius: 8,
    padding: 15,
    minWidth: 50,  //Para que los botones sean más fáciles de tocar
    minHeight: 50
  },
  flechasCarrusel: {
    color: '#ffff',
    fontSize: 20,
  },
  puntosDelCarrusel: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4
  },
  infoCorta: {
    color: '#ffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 20, //Espaciado entre lineas
  }
});

// Datos de ejemplo para las secciones
// SECCION DE LUGARES
const lugaresData = [
  {
    id: 1,
    titulo: "Plaza Mayor de Villa de Leyva",
    descripcion: "Es uno de los lugares más icónicos y emblemáticos de este encantador pueblo colombiano. Con su diseño colonial y su vasto espacio, es un punto de encuentro para locales y turistas que buscan sumergirse en la riqueza cultural y la historia del lugar.",
    imagen: "https://th.bing.com/th/id/R.1d6fea7737c0aeb8b8f70b745a941346?rik=g2qwUQVf5M96QQ&pid=ImgRaw&r=0",
    ubicacion: "Villa de Leyva, Boyacá",
    descripcionCorta: "Es uno de los lugares más icónicos y emblemáticos de este encantador pueblo colombiano..."
  },

  {
    id: 2,
    titulo: "Catedral de Sal de Zipaquirá",
    descripcion: "Una de las maravillas arquitectónicas y religiosas de Colombia, construida en el interior de las minas de sal. Un lugar lleno de misticismo y belleza subterránea.",
    imagen: "https://turismo.encolombia.com/wp-content/uploads/2012/12/Catedral-Sal.jpg",
    ubicacion: "Zipaquirá, Cundinamarca",
    descripcionCorta: "Una de las maravillas arquitectónicas y religiosas de Colombia, construida en el interior de..."
  },

  {
    id: 3,
    titulo: "Parque Tayrona",
    descripcion: "Paraíso natural donde las playas de arena blanca se encuentran con la selva tropical. Ideal para amantes de la naturaleza y el ecoturismo.",
    imagen: "https://aventurecolombia.com/wp-content/uploads/2020/08/parque-tayrona-cabo-san-juan-magdalena-colombia-2-%C2%A9-Tristan-Quevilly-.jpg",
    ubicacion: "Santa Marta, Magdalena",
    descripcionCorta: "Paraíso natural donde las playas de arena blanca se encuentran con la selva tropical..."
  }
];

//SECCION DE RESTAURANTES
const restaurantesData = [
  {
    id: 1,
    titulo: "PacoMex",
    descripcion: "En este restaurante, sus comensales pueden disfrutar de un perfectamente elaborado arroz mexicano, un atrayente rape y unas tiernas hamburguesas americanas.",
    imagen: "https://img.restaurantguru.com/w550/h367/rff7-PACOMEX-TUNJA-design.jpg",
    ubicacion: "Tunja, Muiscas",
    descripcionCorta: "En este restaurante, sus comensales pueden disfrutar de un perfectamente elaborado arroz mexicano..."
  },
  {
    id: 2,
    titulo: "Andrés Carne de Res",
    descripcion: "Experiencia gastronómica única que combina comida tradicional colombiana con un ambiente festivo y cultural inigualable.",
    imagen: "https://speisekarte.menu/storage/media/company_images/1768165/restaurante_andres-carne-de-res_chia_arquitectura__4_.jpg",
    // imagen: "https://smhttp-ssl-53207-colombia.nexcesscdn.net/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/_/a/_andre_s-carne-de-res-night-tour-1.jpg",
    // imagen: "https://imagescdn.citix.com.co/citix/production/tours/04c40937-6ce2-4dd2-ad90-dd0a16f15de4/7a09ba34c170cd54b905394695131b2e.jpeg",
    ubicacion: "Chía, Cundinamarca",
    descripcionCorta: "Experiencia gastronómica única que combina comida tradicional colombiana con un ambiente festivo ..."
  },
  {
    id: 3,
    titulo: "Corona Burger",
    descripcion: "El mejor restaurante de Tunja en Burger y Malteadas, prestamos el mejor servicio a la mesa y la mejor calidad en nuestros productos, con un lugar muy bonito y acogedor.",
    imagen: "https://images.rappi.com/restaurants_background/home-1677256508186.jpg",
    ubicacion: "Tunja, Boyacá",
    descripcionCorta: "El mejor restaurante de Tunja en Burger y Malteadas, prestamos el mejor servicio a la mesa y la mejor calidad ..."
  }
];

//SECCION DE RECOMENDACIONES
const recomendacionesData = [
  {
    id: 1,
    titulo: "Tour de Café",
    descripcion: "Descubre el proceso del café colombiano desde la plantación hasta tu taza. Incluye cata y degustación de variedades premium.",
    imagen: "https://coclatours.com/wp-content/uploads/2019/10/IMG_2255-2-scaled.jpg",
    categoria: "Experiencia",
    ubicacion: "Desde Bogotá hasta la provincia del Tequendama, a solo 2 horas de distancia.",
    descripcionCorta: "Descubre el proceso del café colombiano desde la plantación hasta tu taza."
  },
  {
    id: 2,
    titulo: "Museo del Oro",
    descripcion: "Una colección impresionante de artefactos de oro precolombino que narra la historia de las culturas indígenas colombianas.",
    imagen: "https://files.visitbogota.co/drpl/sites/default/files/2020-10/IMG_9004.jpg",
    // imagen: "https://d3nmwx7scpuzgc.cloudfront.net/sites/default/files/media/image/museo-del-oro-mo-salas-exposicion-permanente-2022-640x400.jpg2",
    categoria: "Cultural",
    ubicacion: "Bogotá, Cundinamarca",
    descripcionCorta: "Una colección impresionante de artefactos de oro precolombino que narra la historia de ..."
  },
  {
    id: 3,
    titulo: " Hotel Bahía Dorada",
    descripcion: "En este hotel, sus visitantes pueden relajarse en una elegante piscina rodeada de palmeras, disfrutar de una cena al aire Fore en un ambiente sofisticado y contemplar una hermosa vista al mar al atardecer.",
    imagen: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/683465320.jpg?k=342644153a6b91ae851152fe911fc45977a243e4793f2df3b171394e68222c2c&o=",
    categoria: "Hospedaje",
    ubicacion: "La Herradura, El Salvador",
    descripcionCorta: "En este hotel, sus visitantes pueden relajarse en una elegante piscina rodeada de palmeras,..."
  }
];

//CODIGO FUENTE DE LA PAGINA
const inicioPage = () => {
  const [lugares, setLugares] = useState(0); //comienza mostrando la primera (esta está guardada en 0)
  const [restaurantes, setRestaurantes] = useState(0);
  const [recomendaciones, setRecomendaciones] = useState(0);

  return (
    <ScrollView style={styles.PrincipalContainer}>
      {/* <View> */}
      {/* <Text style={styles.titulo}>DestinApp</Text> */}

      {/* ------------------------------------------------ */}

      {/* CARRUSEL DE LUGARES*/}
      <View style={styles.containerCarrusel}>
        <Text style={styles.subtitulo}>Lugares destacados</Text>

        <View style={styles.contenidoCarrusel}>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA IZQUIERDA */}
          <TouchableOpacity onPress={() => {
            if (lugares == 0) {  // Si estamos en el PRIMER elemento (posición 0)
              setLugares(lugaresData.length - 1); // Vamos al ÚLTIMO elemento
            } else { // Si no, retrocedemos normal
              setLugares(lugares - 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', left: 10, top: '50%', marginTop: -25, zIndex: 1 }]}> {/* Mitad de la altura del botón para centrar */}

            <Text style={styles.flechasCarrusel}> ‹ </Text>
            {/* <Text style={styles.flechasCarrusel}> ← </Text>  */}
            {/* <MaterialIcons name="arrow-back-ios" size={20} color='#ffff'/> */}
          </TouchableOpacity>

          {/* CONTENEDOR DE LA IMAGEN PARA QUE QUEDE CENTRADA */}
          {/* <View style={[styles.imageContainer, { position: 'relative' }]}> */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: lugaresData[lugares].imagen }} style={styles.image} resizeMode="cover" />   {/* CON LA URI SE TOMA EL OBJETO DEL ARRAY */}
          </View>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA DERECHA */}
          <TouchableOpacity onPress={() => {
            if (lugares === lugaresData.length - 1) {  // Si estamos en el ÚLTIMO elemento
              setLugares(0);  // Volvemos al PRIMER elemento (posición 0)
            } else { //Si no está en el ultimo elemento
              setLugares(lugares + 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', right: 10, top: '50%', marginTop: -25, zIndex: 1 }]}>
            <Text style={styles.flechasCarrusel}>›</Text>
            {/* <Text style={styles.flechasCarrusel}>→</Text> */}
            {/* <MaterialIcons name="arrow-forward-ios"  size={20} color='#ffff'/> */}
          </TouchableOpacity>
        </View>

        {/* TARJETA DE INFORMACIÓN ACTUAL DE LUGARES
          <View style={styles.containerInfoTarjetas}>
            <Text style={styles.subtituloInferior}>{lugaresData[lugares].titulo}</Text>
            <Text style={styles.infoCorta}>{lugaresData[lugares].descripcionCorta}</Text>
            <Text style={styles.parrafoInfo}>Ubicado en: {lugaresData[lugares].ubicacion}</Text>
          </View> */}



        {/* INFORMACIÓN - TEMPORAL: QUITA EL STYLE COMPLICADO */}
        <View>
          <Text style={styles.subtituloInferior}>{lugaresData[lugares].titulo}</Text>
          <Text style={styles.infoCorta}>{lugaresData[lugares].descripcionCorta}</Text>
          <Text style={styles.parrafoInfo}>Ubicado en: {lugaresData[lugares].ubicacion}</Text>
        </View>


        {/* INDICADORES (PUNTITOS) */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          {lugaresData.map((_, index) => ( //lugaresData.map crea un puntito por cada elemento del array
            //_  ignora el elemento actual, y el index da el número de posición (0, 1, 2...)
            <View
              key={index} //INDICA EL PUNTO
              style={[styles.puntosDelCarrusel, { backgroundColor: index == lugares ? '#3498db' : 'gray' }]}
            //Si el punto del elemento(index) es diferente al elemento del array, entonces el punto se verá gris, si no será azul
            />
          ))}
        </View>
      </View>

      {/* ------------------------------------------------ */}

      {/* CARRUSEL DE RESTAURANTES*/}
      <View style={styles.containerCarrusel}>
        <Text style={styles.subtitulo}>Restaurantes destacados</Text>

        <View style={styles.contenidoCarrusel}>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA IZQUIERDA */}
          <TouchableOpacity onPress={() => {
            if (restaurantes == 0) {  // Si estamos en el PRIMER elemento (posición 0)
              setRestaurantes(restaurantesData.length - 1); // Vamos al ÚLTIMO elemento
            } else { // Si no, retrocedemos normal
              setRestaurantes(restaurantes - 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', left: 10, top: '50%', marginTop: -25, zIndex: 1 }]}> {/* Mitad de la altura del botón para centrar */}

            <Text style={styles.flechasCarrusel}> ‹ </Text>
            {/* <Text style={styles.flechasCarrusel}> ← </Text>  */}
            {/* <MaterialIcons name="arrow-back-ios" size={20} color='#ffff'/> */}
          </TouchableOpacity>

          {/* CONTENEDOR DE LA IMAGEN PARA QUE QUEDE CENTRADA */}
          {/* <View style={[styles.imageContainer, { position: 'relative' }]}> */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: restaurantesData[restaurantes].imagen }} style={styles.image} resizeMode="cover" />   {/* CON LA URI SE TOMA EL OBJETO DEL ARRAY */}
          </View>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA DERECHA */}
          <TouchableOpacity onPress={() => {
            if (restaurantes === restaurantesData.length - 1) {  // Si estamos en el ÚLTIMO elemento
              setRestaurantes(0);  // Volvemos al PRIMER elemento (posición 0)
            } else { //Si no está en el ultimo elemento
              setRestaurantes(restaurantes + 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', right: 10, top: '50%', marginTop: -25, zIndex: 1 }]}>
            <Text style={styles.flechasCarrusel}>›</Text>
            {/* <Text style={styles.flechasCarrusel}>→</Text> */}
            {/* <MaterialIcons name="arrow-forward-ios"  size={20} color='#ffff'/> */}
          </TouchableOpacity>
        </View>

        {/* TARJETA DE INFORMACIÓN ACTUAL DE LUGARES
          <View style={styles.containerInfoTarjetas}>
            <Text style={styles.subtituloInferior}>{lugaresData[lugares].titulo}</Text>
            <Text style={styles.infoCorta}>{lugaresData[lugares].descripcionCorta}</Text>
            <Text style={styles.parrafoInfo}>Ubicado en: {lugaresData[lugares].ubicacion}</Text>
          </View> */}



        {/* INFORMACIÓN - TEMPORAL: QUITA EL STYLE COMPLICADO */}
        <View>
          <Text style={styles.subtituloInferior}>{restaurantesData[restaurantes].titulo}</Text>
          <Text style={styles.infoCorta}>{restaurantesData[restaurantes].descripcionCorta}</Text>
          <Text style={styles.parrafoInfo}>Ubicado en: {restaurantesData[restaurantes].ubicacion}</Text>
        </View>


        {/* INDICADORES (PUNTITOS) */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          {restaurantesData.map((_, index) => ( //lugaresData.map crea un puntito por cada elemento del array
            //_  ignora el elemento actual, y el index da el número de posición (0, 1, 2...)
            <View
              key={index} //INDICA EL PUNTO
              style={[styles.puntosDelCarrusel, { backgroundColor: index == restaurantes ? '#3498db' : 'gray' }]}
            //Si el punto del elemento(index) es diferente al elemento del array, entonces el punto se verá gris, si no será azul
            />
          ))}
        </View>
      </View>
      
      {/* ------------------------------------------------ */}

      {/* CARRUSEL DE RECOMENDACIONES*/}
      <View style={styles.containerCarrusel}>
        <Text style={styles.subtitulo}>Recomendaciones</Text>

        <View style={styles.contenidoCarrusel}>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA IZQUIERDA */}
          <TouchableOpacity onPress={() => {
            if (recomendaciones == 0) {  // Si estamos en el PRIMER elemento (posición 0)
              setRecomendaciones(recomendacionesData.length - 1); // Vamos al ÚLTIMO elemento
            } else { // Si no, retrocedemos normal
              setRecomendaciones(recomendaciones - 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', left: 10, top: '50%', marginTop: -25, zIndex: 1 }]}> {/* Mitad de la altura del botón para centrar */}

            <Text style={styles.flechasCarrusel}> ‹ </Text>
            {/* <Text style={styles.flechasCarrusel}> ← </Text>  */}
            {/* <MaterialIcons name="arrow-back-ios" size={20} color='#ffff'/> */}
          </TouchableOpacity>

          {/* CONTENEDOR DE LA IMAGEN PARA QUE QUEDE CENTRADA */}
          {/* <View style={[styles.imageContainer, { position: 'relative' }]}> */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: recomendacionesData[recomendaciones].imagen }} style={styles.image} resizeMode="cover" />   {/* CON LA URI SE TOMA EL OBJETO DEL ARRAY */}
          </View>

          {/* BOTON PARA CAMBIAR DE TARJETA A LA DE LA DERECHA */}
          <TouchableOpacity onPress={() => {
            if (recomendaciones === recomendacionesData.length - 1) {  // Si estamos en el ÚLTIMO elemento
              setRecomendaciones(0);  // Volvemos al PRIMER elemento (posición 0)
            } else { //Si no está en el ultimo elemento
              setRecomendaciones(recomendaciones + 1);
            }
          }} style={[styles.botonflechas, { position: 'absolute', right: 10, top: '50%', marginTop: -25, zIndex: 1 }]}>
            <Text style={styles.flechasCarrusel}>›</Text>
            {/* <Text style={styles.flechasCarrusel}>→</Text> */}
            {/* <MaterialIcons name="arrow-forward-ios"  size={20} color='#ffff'/> */}
          </TouchableOpacity>
        </View>

        {/* TARJETA DE INFORMACIÓN ACTUAL DE LUGARES
          <View style={styles.containerInfoTarjetas}>
            <Text style={styles.subtituloInferior}>{lugaresData[lugares].titulo}</Text>
            <Text style={styles.infoCorta}>{lugaresData[lugares].descripcionCorta}</Text>
            <Text style={styles.parrafoInfo}>Ubicado en: {lugaresData[lugares].ubicacion}</Text>
          </View> */}



        {/* INFORMACIÓN - TEMPORAL: QUITA EL STYLE COMPLICADO */}
        <View>
          <Text style={styles.subtituloInferior}>{recomendacionesData[recomendaciones].titulo}</Text>
          <Text style={styles.infoCorta}>{recomendacionesData[recomendaciones].descripcionCorta}</Text>
          <Text style={styles.parrafoInfo}>Categoria: {recomendacionesData[recomendaciones].categoria}</Text>
          <Text>{"\n"}</Text>  {/* ESTO PERMITE HACER ESPACIADO */}
          <Text style={styles.parrafoInfo}>Ubicado en: {recomendacionesData[recomendaciones].ubicacion}</Text>

        </View>


        {/* INDICADORES (PUNTITOS) */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 15 }}>
          {recomendacionesData.map((_, index) => ( //lugaresData.map crea un puntito por cada elemento del array
            //_  ignora el elemento actual, y el index da el número de posición (0, 1, 2...)
            <View
              key={index} //INDICA EL PUNTO
              style={[styles.puntosDelCarrusel, { backgroundColor: index == recomendaciones ? '#3498db' : 'gray' }]}
            //Si el punto del elemento(index) es diferente al elemento del array, entonces el punto se verá gris, si no será azul
            />
          ))}
        </View>
      </View>


      {/* </View> */}
    </ScrollView>
  )
}

export default inicioPage;









{/*import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  useWindowDimensions //es un hook para obtener tamaño de pantalla
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Datos de ejemplo para las secciones
const lugaresData = [
  {
    id: 1,
    titulo: "Plaza Mayor de Villa de Leyva",
    descripcion: "Es uno de los lugares más icónicos y emblemáticos de este encantador pueblo colombiano. Con su diseño colonial y su vasto espacio, es un punto de encuentro para locales y turistas que buscan sumergirse en la riqueza cultural y la historia del lugar.",
    imagen: "https://th.bing.com/th/id/R.1d6fea7737c0aeb8b8f70b745a941346?rik=g2qwUQVf5M96QQ&pid=ImgRaw&r=0",
    ubicacion: "Villa de Leyva, Boyacá"
  },
  {
    id: 2,
    titulo: "Catedral de Sal de Zipaquirá",
    descripcion: "Una de las maravillas arquitectónicas y religiosas de Colombia, construida en el interior de las minas de sal. Un lugar lleno de misticismo y belleza subterránea.",
    imagen: "https://turismo.encolombia.com/wp-content/uploads/2012/12/Catedral-Sal.jpg",
    ubicacion: "Zipaquirá, Cundinamarca"
  },
  {
    id: 3,
    titulo: "Parque Tayrona",
    descripcion: "Paraíso natural donde las playas de arena blanca se encuentran con la selva tropical. Ideal para amantes de la naturaleza y el ecoturismo.",
    imagen: "https://aventurecolombia.com/wp-content/uploads/2020/08/parque-tayrona-cabo-san-juan-magdalena-colombia-2-%C2%A9-Tristan-Quevilly-.jpg",
    ubicacion: "Santa Marta, Magdalena"
  }
];

const restaurantesData = [
  {
    id: 1,
    titulo: "PacoMex",
    descripcion: "En este restaurante, sus comensales pueden disfrutar de un perfectamente elaborado arroz mexicano, un atrayente rape y unas tiernas hamburguesas americanas.",
    imagen: "https://img.restaurantguru.com/w550/h367/rff7-PACOMEX-TUNJA-design.jpg",
    ubicacion: "Tunja, Muiscas"
  },
  {
    id: 2,
    titulo: "Andrés Carne de Res",
    descripcion: "Experiencia gastronómica única que combina comida tradicional colombiana con un ambiente festivo y cultural inigualable.",
    imagen: "https://speisekarte.menu/storage/media/company_images/1768165/restaurante_andres-carne-de-res_chia_arquitectura__4_.jpg",
    ubicacion: "Chía, Cundinamarca"
  }
];

const recomendacionesData = [
  {
    id: 1,
    titulo: "Tour de Café",
    descripcion: "Descubre el proceso del café colombiano desde la plantación hasta tu taza. Incluye cata y degustación de variedades premium.",
    imagen: "https://coclatours.com/wp-content/uploads/2019/10/IMG_2255-2-scaled.jpg",
    categoria: "Experiencia"
  },
  {
    id: 2,
    titulo: "Museo del Oro",
    descripcion: "Una colección impresionante de artefactos de oro precolombino que narra la historia de las culturas indígenas colombianas.",
    imagen: "https://files.visitbogota.co/drpl/sites/default/files/2020-10/IMG_9004.jpg",
    categoria: "Cultural"
  }
];

const InicioPage = () => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions(); // useWindowDimensions() obtiene el ancho y alto de la pantalla
  const [currentLugarIndex, setCurrentLugarIndex] = useState(0);
  const [currentRestauranteIndex, setCurrentRestauranteIndex] = useState(0);
  const [currentRecomendacionIndex, setCurrentRecomendacionIndex] = useState(0);

  // Cálculos responsive
  // Detecta el tipo de pantalla del dispositivo y calcula dimesiones adaptativas usando operadores ternarios (if-else)
  const isSmallScreen = screenWidth < 375;
  const isLargeScreen = screenWidth > 768;

  const cardWidth = isSmallScreen ? screenWidth * 0.78 :
                   isLargeScreen ? screenWidth * 0.65 :
                   screenWidth * 0.82;

  const cardHeight = isSmallScreen ? 320 : 350;
  const imageHeight = isSmallScreen ? 140 : 160;
  const titleSize = isSmallScreen ? 18 : isLargeScreen ? 24 : 20;
  const descriptionSize = isSmallScreen ? 13 : 14;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
    },
    scrollContent: {
      flexGrow: 1,
      paddingVertical: isSmallScreen ? 15 : 25,
    },
    section: {
      marginBottom: isSmallScreen ? 25 : 35,
    },
    sectionTitle: {
      fontSize: isSmallScreen ? 20 : isLargeScreen ? 28 : 24,
      fontWeight: 'bold',
      color: '#ffffff',
      marginHorizontal: isSmallScreen ? 15 : 20,
      marginBottom: isSmallScreen ? 12 : 18,
      letterSpacing: 0.5,
    },
    card: {
      width: cardWidth,
      backgroundColor: '#1a1a1a',
      borderRadius: isSmallScreen ? 16 : 20,
      marginHorizontal: isSmallScreen ? 5 : 8,
      shadowColor: '#3498db',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 10,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: '#333333',
      minHeight: cardHeight,
    },
    cardImage: {
      width: '100%',
      height: imageHeight,
      resizeMode: 'cover',
    },
    cardContent: {
      padding: isSmallScreen ? 12 : 16,
      flex: 1,
      justifyContent: 'space-between',
    },
    cardTitle: {
      fontSize: titleSize,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: isSmallScreen ? 6 : 8,
      letterSpacing: 0.3,
      lineHeight: isSmallScreen ? 22 : 24,
    },
    cardDescription: {
      fontSize: descriptionSize,
      color: '#bdc3c7',
      lineHeight: isSmallScreen ? 18 : 20,
      marginBottom: isSmallScreen ? 8 : 12,
      flexShrink: 1,
    },
    cardLocation: {
      fontSize: isSmallScreen ? 12 : 13,
      color: '#3498db',
      fontWeight: '600',
      letterSpacing: 0.2,
    },
    cardCategory: {
      fontSize: isSmallScreen ? 12 : 13,
      color: '#e74c3c',
      fontWeight: '600',
      letterSpacing: 0.2,
    },
    navigationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: isSmallScreen ? 8 : 15,
      marginBottom: isSmallScreen ? 8 : 12,
    },
    navButton: {
      backgroundColor: '#3498db',
      borderRadius: isSmallScreen ? 20 : 25,
      padding: isSmallScreen ? 10 : 12,
      shadowColor: '#3498db',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 6,
      borderWidth: 1,
      borderColor: '#2980b9',
      minWidth: isSmallScreen ? 40 : 48,
      minHeight: isSmallScreen ? 40 : 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navButtonDisabled: {
      backgroundColor: '#2c3e50',
      borderColor: '#34495e',
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: isSmallScreen ? 15 : 20,
      marginBottom: isSmallScreen ? 15 : 18,
    },
    seeAllText: {
      color: '#3498db',
      fontSize: isSmallScreen ? 14 : 15,
      fontWeight: '600',
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: isSmallScreen ? 10 : 12,
      paddingHorizontal: 10,
    },
    indicator: {
      width: isSmallScreen ? 6 : 7,
      height: isSmallScreen ? 6 : 7,
      borderRadius: isSmallScreen ? 3 : 4,
      backgroundColor: '#34495e',
      marginHorizontal: isSmallScreen ? 3 : 4,
    },
    indicatorActive: {
      backgroundColor: '#3498db',
      width: isSmallScreen ? 16 : 20,
    },
    contentContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: isSmallScreen ? 280 : 320,
      flex: 1,
    },
    cardTextContainer: {
      flex: 1,
      justifyContent: 'flex-start',
    },
    emptySpace: {
      height: isSmallScreen ? 10 : 15,
    }
  });

  const nextItem = (currentIndex: number, data: any[], setIndex: any) => {
    if (currentIndex < data.length - 1) {
      setIndex(currentIndex + 1);
    }
  };

  const prevItem = (currentIndex: number, setIndex: any) => {
    if (currentIndex > 0) {
      setIndex(currentIndex - 1);
    }
  };

  const renderIndicators = (currentIndex: number, data: any[]) => (
    <View style={styles.indicatorContainer}>
      {data.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentIndex && styles.indicatorActive
          ]}
        />
      ))}
    </View>
  );

  const renderCard = (item: any, showLocation = true) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.imagen }}
        style={styles.cardImage}
        defaultSource={{ uri: 'https://via.placeholder.com/500x200/1a1a1a/ffffff?text=Destinapp' }}
      />
      <View style={styles.cardContent}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle} numberOfLines={2}>{item.titulo}</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            {item.descripcion}
          </Text>
        </View>
        <View>
          {showLocation && item.ubicacion && (
            <Text style={styles.cardLocation} numberOfLines={1}> {item.ubicacion}</Text>
          )}
          {!showLocation && item.categoria && (
            <Text style={styles.cardCategory} numberOfLines={1}> {item.categoria}</Text>
          )}
        </View>
      </View>
    </View>
  );

  const renderSection = (title: string, data: any[], currentIndex: number, setIndex: any, showLocation = true) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentIndex === 0 && styles.navButtonDisabled
          ]}
          onPress={() => prevItem(currentIndex, setIndex)}
          disabled={currentIndex === 0}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={isSmallScreen ? 18 : 20}
            color={currentIndex === 0 ? '#7f8c8d' : 'white'}
          />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          {renderCard(data[currentIndex], showLocation)}
          {renderIndicators(currentIndex, data)}
        </View>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentIndex === data.length - 1 && styles.navButtonDisabled
          ]}
          onPress={() => nextItem(currentIndex, data, setIndex)}
          disabled={currentIndex === data.length - 1}
        >
          <MaterialIcons
            name="arrow-forward-ios"
            size={isSmallScreen ? 18 : 20}
            color={currentIndex === data.length - 1 ? '#7f8c8d' : 'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {renderSection("LUGARES", lugaresData, currentLugarIndex, setCurrentLugarIndex, true)}
      {renderSection("RESTAURANTES", restaurantesData, currentRestauranteIndex, setCurrentRestauranteIndex, true)}
      {renderSection("RECOMENDACIONES", recomendacionesData, currentRecomendacionIndex, setCurrentRecomendacionIndex, false)}
      <View style={styles.emptySpace} />
    </ScrollView>
  );
}

export default InicioPage;*/}