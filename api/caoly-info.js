export default async function handler(req, res) {
  res.status(200).json({
    company_name: "Africa Processing Company SARL (CAOLY)",
    abbreviation: "CAOLY",
    country: "Cameroon",
    sectors: [
      "Agro-industrie",
      "Transformation des produits agricoles",
      "Import-export"
    ],
    main_products: [
      "Masse de cacao",
      "Poudre de cacao",
      "Beurre de cacao",
      "Tourteaux de cacao",
      "Autres dérivés du cacao"
    ],
    description: "Africa Processing Company SARL (CAOLY) est une entreprise camerounaise spécialisée dans la transformation industrielle du cacao. Elle valorise les produits agricoles locaux et s’inscrit dans une démarche de développement durable, en favorisant la transformation locale et la création de valeur au Cameroun.",
    headquarters: {
      city: "Douala",
      country: "Cameroon"
    },
    vision: "Devenir un acteur majeur de la transformation agro-industrielle en Afrique, en créant de la valeur localement.",
    mission: "Transformer localement les matières premières agricoles en produits finis de qualité, compétitifs à l’échelle internationale.",
    contact: {
      email: "info@caoly.com",
      phone: "+237 6 XX XX XX XX",
      website: "https://caoly.com",
      social_media: {
        facebook: "https://facebook.com/caoly",
        linkedin: "https://linkedin.com/company/caoly"
      }
    }
  });
}
