import React, { useState } from "react";
import { 
  Text, 
  View, 
  ScrollView, 
  Image, 
  StyleSheet, 
  Dimensions,
  TouchableOpacity,
  useWindowDimensions 
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
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const [currentLugarIndex, setCurrentLugarIndex] = useState(0);
  const [currentRestauranteIndex, setCurrentRestauranteIndex] = useState(0);
  const [currentRecomendacionIndex, setCurrentRecomendacionIndex] = useState(0);

  // Cálculos responsive
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

export default InicioPage;