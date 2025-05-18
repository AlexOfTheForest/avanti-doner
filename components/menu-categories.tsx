"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Menükategorien basierend auf der Speisekarte
const menuCategories = [
  {
    name: "KEBAB",
    description: "Verschiedene Kebab-Variationen",
    color: "bg-red-600",
    image: "/images/kebab.png",
    items: [
      {
        name: "01. Kebabburger",
        description: "mit Hackfleisch vom Drehspieß, gemischter Salat und Tzatziki",
        price: "6,50 €",
      },
      {
        name: "02. Kebabburger XXL",
        description: "mit Hackfleisch vom Drehspieß, gemischter Salat und Tzatziki",
        price: "8,50 €",
      },
      { name: "03. Hähnchenburger", description: "mit Hähnchen, gemischter Salat und Tzatziki", price: "6,50 €" },
      { name: "04. Hähnchenburger XXL", description: "mit Hähnchen, gemischter Salat und Tzatziki", price: "8,50 €" },
      { name: "05. Sucukburger", description: "mit Sucuk, gemischter Salat und Tzatziki", price: "7,00 €" },
      { name: "06. Salatburger", description: "mit gemischtem Salat und Tzatziki oder Hirtenkäse", price: "6,00 €" },
      {
        name: "07. Dürüm Kebab",
        description: "mit Hackfleisch vom Drehspieß, gemischter Salat und Tzatziki",
        price: "8,00 €",
      },
      {
        name: "08. Dürüm Hähnchen",
        description: "mit Hähnchen vom Drehspieß, gemischter Salat und Tzatziki",
        price: "8,00 €",
      },
      { name: "09. Dürüm Vegetarisch", description: "mit gemischtem Salat, Hirtenkäse oder Tzatziki", price: "7,50 €" },
      {
        name: "10. Lahmacun Kebab",
        description: "mit Hackfleisch vom Drehspieß, gemischter Salat und Tzatziki",
        price: "8,00 €",
      },
      {
        name: "11. Lahmacun Hähnchen",
        description: "mit Hähnchen vom Drehspieß, gemischter Salat und Tzatziki",
        price: "8,00 €",
      },
      {
        name: "12. Lahmacun Vegetarisch",
        description: "mit gemischtem Salat, Hirtenkäse oder Tzatziki",
        price: "7,50 €",
      },
      {
        name: "13. Kebab oder Hähnchenbox",
        description:
          "mit Hackfleisch vom Drehspieß oder Hähnchen, Pommes Frites, Krautsalat, Zwiebeln, Gurken, Tomaten, Eisbergsalat, Tomatensauce und Tzatziki",
        price: "7,00 €",
        highlight: true,
      },
    ],
  },
  {
    name: "FRISCHE SALATE",
    description: "Mit Joghurt- oder Cocktailsauce Größen: klein, groß ",
    color: "bg-green-600",
    image: "/images/frische-salate.png",
    items: [
      {
        name: "15. Hähnchen Salat",
        description: "mit Hähnchen, Hirtenkäse, Ei, gemischter Salat und Salatdressing",
        price: "7,00 € / 9,00 €",
      },
      {
        name: "16. Kebab Salat",
        description: "mit Hackfleisch vom Drehspieß, Ei, gemischter Salat und Salatdressing",
        price: "7,00 € / 9,00 €",
      },
      {
        name: "17. Thunfisch Salat",
        description: "mit Thunfisch, Ei, gemischter Salat und Salatdressing",
        price: "6,50 € / 8,00 €",
      },
      {
        name: "18. Avanti Salat",
        description: "mit Putenschinken, Ei, Oliven, Peperoni (mild), Hirtenkäse, gemischter Salat, und Salatdressing",
        price: "7,50 € / 9,50 €",
      },
      {
        name: "19. Hirtensalat",
        description: "mit Hirtenkäse, Ei, Oliven, gemischter Salat und Salatdressing",
        price: "6,50 € / 8,50 €",
      },
      {
        name: "20. Gemischter Salat",
        description: "mit Hirtenkäse, gemischter Salat und Salatdressing",
        price: "6,00 € / 7,00 €",
      },
      {
        name: "21. Mozzarella Salat",
        description: "mit gemischtem Salat, Mozzarella, Oliven, Ei und Salatdressing",
        price: "7,00 € / 8,50 €",
      },
      {
        name: "22. Salat Hawaii",
        description: "mit gemischtem Salat, Putenschinken, Ananas, Gurken, Tomaten, Zwiebeln, Ei und Salatdressing",
        price: "7,00 € / 8,50 €",
      },
    ],
  },
  {
    name: "TELLERGERICHTE",
    description: "Verschiedene Tellergerichte mit Beilagen",
    color: "bg-white",
    image: "/images/plattengerichte.png",
    items: [
      {
        name: "24. Kebab Teller",
        description: "mit Hackfleisch vom Drehspieß, Pommes Frites, gemischter Salat und Tzatziki",
        price: "10,00 €",
      },
      {
        name: "25. Hähnchen Teller",
        description: "mit Hähnchen vom Drehspieß, Pommes Frites, gemischter Salat und Tzatziki",
        price: "10,00 €",
      },
      {
        name: "26. Avanti Teller",
        description: "mit Hackfleisch vom Drehspieß, Hähnchen, Sucuk, 1 Fladenbrot, gemischter Salat und Tzatziki",
        price: "12,00 €",
      },
      {
        name: "27. Sucuk Teller",
        description: "mit Sucuk, 1 Fladenbrot, gemischter Salat und Tzatziki",
        price: "10,00 €",
      },
    ],
  },
  {
    name: "PIZZA",
    description: "Verschiedene Pizzen in drei Größen: klein (22 cm), groß (28 cm), XXL (40 cm)",
    color: "bg-red-600",
    image: "/images/pizza.png",
    items: [
      {
        name: "28. Pizza Salami Funghi",
        description: "mit Tomatensauce, Käse, Salami, frischen Champignons und Oregano",
        price: "6,50 € / 9,00 € / 19,00 €",
        new: true,
      },
      {
        name: "29. Pizza Schinken Funghi",
        description: "mit Tomatensauce, Käse, Schinken, frischen Champignons und Oregano",
        price: "6,50 € / 9,00 € / 19,00 €",
        new: true,
      },
      {
        name: "30. Pizza Margherita",
        description: "mit Tomatensauce, Käse und Oregano",
        price: "5,00 € / 7,00 € / 15,00 €",
      },
      {
        name: "31. Pizza Salami",
        description: "mit Tomatensauce, Käse, Salami und Oregano",
        price: "6,00 € / 8,00 € / 17,50 €",
      },
      {
        name: "32. Pizza Schinken",
        description: "mit Tomatensauce, Käse, Putenschinken und Oregano",
        price: "6,00 € / 8,00 € / 17,50 €",
      },
      {
        name: "33. Pizza Thunfisch",
        description: "mit Tomatensauce, Käse, Thunfisch und Oregano",
        price: "6,00 € / 8,00 € / 17,50 €",
      },
      {
        name: "34. Pizza Tonno Cippola",
        description: "mit Tomatensauce, Käse, Thunfisch, Zwiebeln und Oregano",
        price: "6,50 € / 8,50 € / 18,50 €",
      },
      {
        name: "35. Pizza Döner/Hähnchen-Mix",
        description: "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Hähnchen, Zwiebeln und Oregano",
        price: "6,50 € / 9,50 € / 21,50 €",
      },
      {
        name: "36. Pizza Funghi",
        description: "mit Tomatensauce, Käse, frischen Champignons und Oregano",
        price: "6,00 € / 8,00 € / 17,00 €",
      },
      {
        name: "37. Pizza Paprika",
        description: "mit Tomatensauce, Käse, Paprika und Oregano",
        price: "5,50 € / 7,50 € / 17,00 €",
      },
      {
        name: "38. Pizza Miran",
        description: "mit Tomatensauce, Käse, Zwiebeln, Thunfisch, Salami, Putenschinken und Oregano",
        price: "7,00 € / 9,50 € / 20,00 €",
      },
      {
        name: "39. Pizza Vegetaria",
        description:
          "mit Tomatensauce, Käse, Paprika, frischen Champignons, Zwiebeln, Hirtenkäse, Peperoni (mild), Oliven, Artischocken und Oregano",
        price: "6,50 € / 9,50 € / 20,00 €",
      },
      {
        name: "40. Pizza Hawaii",
        description: "mit Tomatensauce, Käse, Putenschinken, Ananas und Oregano",
        price: "6,00 € / 8,50 € / 18,50 €",
      },
      {
        name: "41. Pizza Sucuk",
        description: "mit Tomatensauce, Käse, Zwiebeln, Sucuk und Oregano",
        price: "6,00 € / 9,50 € / 22,00 €",
      },
      {
        name: "42. Pizza Mizgin",
        description: "mit Tomatensauce, Pizzakäse, Chester, Mozzarella, Hirtenkäse und Oregano",
        price: "6,50 € / 9,50 € / 21,00 €",
      },
      {
        name: "43. Pizza Manhattan",
        description: "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Sauce Hollandaise, Chesterkäse und Oregano",
        price: "7,00 € / 9,50 € / 22,00 €",
      },
      {
        name: "44. Pizza Quatro Stangioni",
        description:
          "mit Tomatensauce, Käse, Salami, Artischocken, Putenschinken, Zwiebeln, frischen Champignons und Oregano",
        price: "7,00 € / 9,50 € / 22,00 €",
      },
      {
        name: "45. Pizza Roma",
        description: "mit Tomatensauce, Käse, Putenschinken, Salami, Frischen Champignons und Oregano",
        price: "6,50 € / 9,50 € / 20,00 €",
      },
      {
        name: "46. Pizza Salami Prosciutto",
        description: "mit Tomatensauce, Käse, Salami, Putenschinken und Oregano",
        price: "6,00 € / 9,00 € / 19,50 €",
      },
      {
        name: "47. Pizza Mais",
        description: "mit Tomatensauce, Käse,Mais und Oregano",
        price: "5,00 € / 7,50 € / 17,00 €",
      },
      {
        name: "48. Pizza 63 Ahmed",
        description: "mit Tomatensauce, Käse, Oliven, Peperoni (mild), Hirtenkäse, Salami, Zwiebeln und Oregano",
        price: "7,00 € / 10,00 € / 22,00 €",
      },
      {
        name: "49. Pizza Mozzarella",
        description: "mit Tomatensauce, Käse, Mozzarella, frischen Tomaten und Oregano",
        price: "6,00 € / 8,50 € / 18,50 €",
      },
      {
        name: "50. Pizza Kebab",
        description: "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Zwiebeln und Oregano",
        price: "6,00 € / 9,00 € / 19,50 €",
      },
      {
        name: "51. Pizza Kebab Hollandaise",
        description: "mit Tomatensauce, Käse, Hackfleisch Drehspieß, Zwiebeln, Sauce Hollandaise und Oregano",
        price: "6,50 € / 9,50 € / 22,00 €",
      },
      {
        name: "52. Pizza Hänchen",
        description: "mit Tomatensauce, Käse, Hänchen, Zwiebeln und Oregano",
        price: "6,00 € / 9,00 € / 19,50 €",
      },
      {
        name: "53. Pizza Hänchen Hollandaise",
        description: "mit Tomatensauce, Käse, Hänchen, Zwiebeln, Sauce Hollandaise und Oregano",
        price: "6,50 € / 9,50 € / 22,00 €",
      },
      {
        name: "54. Pizza Leer",
        description: "mit Tomatensauce, Käse, Hackfleisch Drehspieß, Eisbergsalat, Salatsauce und Oregano",
        price: "6,50 € / 10,00 € / 22,00 €",
      },
      {
        name: "55. Pizza Krabben",
        description: "mit Tomatensauce, Käse, Krabben, Knoblauch und Oregano",
        price: "7,00 € / 9,50 € / 22,00 €",
      },
      {
        name: "56. Pizza Spinat",
        description: "mit Tomatensauce, Käse, Blattspinat, Ei, Knoblauch und Oregano",
        price: "7,00 € / 10,00 € / 22,00 €",
      },
      {
        name: "57. Pizza Dilo",
        description: "mit Tomatensauce, Käse, Krabben, Thunfisch, Peperoni(mild) und Oregano",
        price: "7,00 € / 10,00 € / 22,00 €",
      },
      {
        name: "58. Pizza Kadiro",
        description:
          "mit Tomatensauce, Käse, Salami, Putenschinken, Hackfleisch Drehspieß, Sucuk, Hähnchenfleisch, Sauce Hollandaise, mit KäseÜberbacken ",
        price: "8,00 € / 12,00 € / 25,00 €",
      },
      {
        name: "59. Pizza Vanessa",
        description: "mit Tomatensauce, Käse, Salami, Peperoni, Mais, Hirtenkäse, Sauce Hollandaise, Zwiebeln, Paprika",
        price: "7,50 € / 11,00 € / 24,00 €",
      },
      {
        name: "60. Pizza Loga",
        description: "mit Tomatensauce, Käse, Salami, Putenschinken, Champignons, Ei, Mais und Sauce Hollandaise",
        price: "7,00 € / 10,00 € / 22,00 €",
      },
      {
        name: "61. Pizza Dilan",
        description: "mit Tomatensauce, Käse, Peperoni, Paprika, Champignons, Zwiebel, Mais, Hirtenkäse, Sauce Hollandaise, Brokkoli",
        price: "7,50 € / 11,00 € / 24,00 €",
      },
      {
        name: "62. Pizza LA Urfa",
        description:
          "mit Tomatensauce, Käse, Salami, Putenschinken, Hackfleisch Drehspieß, Sucuk, Hähnschenfleisch, Zwiebeln, Mais, Sauce Hollandaise, mit KäseÜberbacken",
        price: "7,50 € / 12,00 € / 25,00 €",
      },
      {
        name: "63. Pizza Jheringsfehn",
        description: "mit Tomatensauce, Käse, Mais, Sucuk, Hähnschenfleisch, Paprika, Zwiebeln, und Sauce Hollandaise",
        price: "7,00 € / 10,50 € / 23,00 €",
      },
      {
        name: "64. Pizza Thore",
        description:
          "mit Tomatensauce, Käse, Hähnschenfleisch, Hackfleisch Drehspieß, Broccoli, Hirtenkäse, Paprika, Zwiebeln, Sauce Hollandaise",
        price: "7,50 € / 11,00 € / 25,00 €",
      },
      {
        name: "65. Pizza Nelly",
        description:
          "mit Tomatensauce, Käse, Salami, Putenschinken, Sucuk, Hirtenkäse, Paprika, Zwiebeln, Sauce Hollandaise",
        price: "7,50 € / 12,50 € / 26,00 €",
      },
      {
        name: "66. Pizza Kuce",
        description: "mit Tomatensauce, Käse, Thunfisch, Sucuk, Broccoli, Paprika, Mais, Sauce Hollandaise",
        price: "7,50 € / 11,00 € / 23,00 €",
      },
      {
        name: "67. Pizza Ayse",
        description: "mit Tomatensauce, Käse, frische Oliven, Hirtenkäse, und Joghurtsauce",
        price: "7,00 € / 10,00 € / 20,00 €",
      },
      {
        name: "68. Pizza Daniel",
        description: "mit Hackfleisch Drehspieß, Sucuk, Pilzen, und Sauce Hollandaise",
        price: "7,00 € / 10,50 € / 23,00 €",
      },
    ],
  },
  {
    name: "PIZZA SPECIAL",
    description: "Spezielle Pizzakreationen in drei Größen: klein (22 cm), groß (28 cm), XXL (40 cm)",
    color: "bg-red-600",
    image: "/images/pizzaspecial.png",
    items: [
      {
        name: "69. Pizza Zagroz Spezial",
        description:
          "mit Tomatensauce, Käse, Salami, Putenschinken, Zwiebeln, frischen Champignons, Artischocken, Paprika, Thunfisch, Ananas und Oregano",
        price: "7,50 € / 12,00 € / 26,00 €",
      },
      {
        name: "70. Pizza Avanti Spezial",
        description:
          "mit Tomatensauce, Käse, Hackfleisch Drehspieß, Sucuk, Hähnschen, Peperoni (mild), Chesterkäse, Sauce Hollandaise und Oregano, scharf",
        price: "8,00 € / 11,50 € / 25,00 €",
      },
      {
        name: "71. Pizza Neslihan",
        description:
          "mit Tomatensauce, Käse, Blattspinat, Puttenschinken, Knoblauch, Mais, frischen Champignons, Artischocken, Oliven und Oregano",
        price: "8,00 € / 11,50 € / 25,00 €",
      },
      {
        name: "72. Pizza Urfa",
        description:
          "mit Tomatensauce, Käse, Sucuk, frischen Champignons, Zwiebeln, Peperoni (mild), Paprika und Oregano",
        price: "7,50 € / 10,50 € / 22,00 €",
      },
      {
        name: "73. Pizza Mira",
        description:
          "mit Tomatensauce, Käse, Hähnchen, Zwiebeln, frischen Champignons, Paprika, Broccoli, Peperoni (mild), Sauce Hollandaise und Oregano",
        price: "7,00 € / 11,00 € / 24,00 €",
      },
    ],
  },
  {
    name: "PIZZA CALZONE (GESCHLOSSEN)",
    description: "Gefüllte Pizzataschen mit verschiedenen Füllungen",
    color: "bg-white",
    image: "/images/calzone.png",
    items: [
      {
        name: "95. Pizza Calzone Kebab",
        description: "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Zwiebeln und Oregano, Krautsalat und Tzatziki",
        price: "9,50 €",
      },
      {
        name: "96. Pizza Calzone Hähnchen",
        description: "mit Tomatensauce, Käse Hähnchen, Zwiebeln und Oregano, Krautsalat und Tzatziki",
        price: "9,50 €",
      },
      {
        name: "97. Pizza Calzone Avanti",
        description:
          "mit Tomatensauce, Käse, Hackfleisch vom Drehspieß, Hähnchen, Zwiebeln, Sauce Hollandaise, Chesterkäse und Oregano",
        price: "10,00 €",
      },
      {
        name: "98. Pizza Calzone Loga",
        description: "mit Tomatensauce, Käse, Blattspinat, Putenschinken, Knoblauch, Mais, frischen Champignons und Oregano",
        price: "10,00 €",
      },
      {
        name: "99. Hawaii Calzone",
        description: "mit Tomatensauce, Käse, Putenschinken, Ananas",
        price: "9,50 €",
      },
      {
        name: "100. Bomba Calzone (scharf)",
        description: "mit Tomatensauce, Käse, Salami, Peperoni, scharf",
        price: "9,50 €",
      },
    ],
  },
  {
    name: "ROLLO",
    description: "Frisch zubereitete Rollos mit verschiedenen Füllungen",
    color: "bg-green-600",
    image: "/images/rollo.png",
    items: [
      {
        name: "85. Kebab Rollo",
        description: "mit Hackfleisch vom Drehspieß, Käse, Krautsalat, Gurken, Tomaten, Zwiebeln, Tzatziki und Tomatensauce",
        price: "9,50 €",
      },
      {
        name: "86. Kebab Rollo Manhatten",
        description:
          "mit Hackfleisch vom Drehspieß, Käse, Hollandaise, Chesterkäse, Tomatensauce",
        price: "10,00 €",
      },
      {
        name: "87. Hähnchen Rollo",
        description: "mit Hähnchen, Käse, Krautsalat, Gurken, Tomaten, Zwiebeln, Tzatziki und Tomatensauce",
        price: "9,50 €",
      },
      {
        name: "88. Hähnchen Rollo Manhatten",
        description:
          "mit Hähnchen, Käse, Hollandaise, Chesterkäse und Tomatensauce",
        price: "10,00 €",
      },
      {
        name: "89. Rollo Vegetarisch",
        description: "mit Krautsalat, Gurken, Tomaten, Zwiebeln, Eisbergsalat, Hirtenkäse und Tomatensauce",
        price: "9,50 €",
      },
      {
        name: "90. Rollo Avanti Spezial",
        description:
          "mit Hackfleisch vom Drehspieß, Hähnchen, Käse, Krautsalat, Zwiebeln, Hirtenkäse, Peperoni (mild) und Tomatensauce",
        price: "10,50 €",
      },
      {
        name: "91. Rollo Loga",
        description: "mit Käse, Blattspinat, Putenschinken, Knoblauch, frischen Champignons und Tomatensauce",
        price: "9,50 €",
      },
      { name: "92. Hawaii-Rollo", description: "mit Tomatensauce, Käse, Putenschinken und Ananas", price: "9,50 €" },
    ],
  },
  {
    name: "AUFLÄUFE",
    description: "Überbackene Gerichte aus dem Ofen",
    color: "bg-red-600",
    image: "/images/aufläufe.png",
    items: [
      {
        name: "105. Kebab überbacken",
        description: "mit Hackfleisch vom Drehspieß, Sahne sauce, KäseÜberbacken und 1 Fladenbrot",
        price: "9,00 €",
      },
      {
        name: "106. Kebab überbacken Spezial",
        description:
          "mit Hackfleisch vom Drehspieß, Zwiebeln, Sahne sauce, frischen Champignons, Paprika, Sauce Hollandaise, KäseÜberbacken und 1 Fladenbrot",
        price: "10,00 €",
      },
      {
        name: "107. Hähnchen überbacken",
        description: "mit Hähnchen , Sahne sauce, KäseÜberbacken und 1 Fladenbrot",
        price: "9,00 €",
      },
      {
        name: "108. Hähnchen überbacken Spezial",
        description:
          " mit Hähnchen, Zwiebeln, Sahne sauce, frische Champignons, Paprika, Sauce Hollandaise, KäseÜberbacken und 1 Fladenbrot",
        price: "10,00 €",
      },
    ],
  },
  {
    name: "BEILAGEN",
    description: "Verschiedene Beilagen und Extras",
    color: "bg-white",
    image: "/images/beilagen.png",
    items: [
      { name: "110. Portion Pommes", description: "", price: "3,50 €" },
      { name: "111. Portion Hirtenkäse", description: "", price: "4,00 €" },
      { name: "112. Portion Kraut", description: "", price: "4,00 €" },
      { name: "113. Portion Peperoni (mild)", description: "", price: "4,00 €" },
      { name: "114. Portion Oliven", description: "", price: "4,00 €" },
      { name: "115. Portion Tzatziki", description: "klein: 2,00 € / groß: 3,50 €", price: "2,00 € / 3,50 €" },
      { name: "116. Portion Salatdressing Joghurt/Cocktail", description: "klein: 2,00 € / groß: 3,50 €", price: "2,00 € / 3,50 €" },
      { name: "117. Fladenbrot", description: "", price: "2,00 €" },
      { name: "118. Pizzabrötchen", description: "", price: "4,50 €" },
    ],
  },
  {
    name: "IMBISSGERICHTE",
    description: "Schnelle Gerichte für zwischendurch",
    color: "bg-green-600",
    image: "/images/imbissgerichte.png",
    items: [
      { name: "122. Chickenburger", description: "Hähnschenschnitzel", price: "6,50 €" },
      { name: "123. Chicken-Cheeseburger", description: "Hähnschenschnitzel mit 2 Käsescheiben", price: "7,50 €" },
      { name: "124. Doppeldecker-Chickenburger", description: "mit 2 Hähnschenschnitzel", price: "10,00 €" },
    ],
  },
  {
    name: "SCHNITZEL",
    description: "Verschiedene Schnitzel-Variationen mit Beilagen",
    color: "bg-red-600",
    image: "/images/schnitzel.png",
    items: [
      {
        name: "135. Hähnchenschnitzel, paniert",
        description: "2 Schnitzel mit Kräuterbutter und Pommes und Salat",
        price: "12,50 €",
      },
      { name: "136. Jägerschnitzel", description: "2 Schnitzel mit Pommes und Salat", price: "14,50 €" },
      { name: "137. Champignon-Rahm-Schnitzel", description: "2 Schnitzel mit Pommes und Salat", price: "14,50 €" },
      {
        name: "138. Avanti-Schnitzel",
        description: "2 Schnitzel mit Pommes, Broccoli, Paprika und Sahnesauce und Salat",
        price: "15,00 €",
      },
      {
        name: "139. Zwiebel-Schnitzel",
        description: "2 Schnitzel mit Pommes, Broccoli, Paprika, Zwiebeln, Sahne und Salat",
        price: "15,00 €",
      },
    ],
  },
  {
    name: "NUDELGERICHTE",
    description: "Verschiedene Pasta-Gerichte mit Rigatoni mit Käse überbacken = 1,00€ Aufpreis",
    color: "bg-white",
    image: "/images/nudelgerichte.png",
    items: [
      { name: "140. Rigatoni Napoli", description: "mit Tomatensauce", price: "9,00 €" },
      { name: "141. Rigatoni Carbonara", description: "mit Putenschinken, Sahnesauce und Rührei)", price: "10,00 €" },
      { name: "142. Rigatoni Broccoli", description: "mit Sahne, Broccoli und Zwiebeln", price: "10,00 €" },
      { name: "143. Rigatoni Tonno", description: "mit Sahnesauce und Thunfisch", price: "10,00 €" },
      { name: "144. Rigatoni Sahneschinken", description: "mit Sahne und Putenschinken", price: "10,00 €" },
      {
        name: "145. Rigatoni Lena",
        description: "mit Hack- oder Hähnchenfleisch vom Drehspieß, Paprika und Zwiebeln, Sahne",
        price: "11,00 €",
      },
      { name: "146. Rigatoni Riviera", description: "mit Sahne, Krabben, Thunfisch und Knoblauch", price: "11,00 €" },
    ],
  },
  {
    name: "PLATTENGERICHTE",
    description: "Große Platten für mehrere Personen",
    color: "bg-green-600",
    image: "/images/plattengerichte.png",
    items: [
      {
        name: "Avanti Platte",
        description:
          "mit Hackfleisch vom Drehspieß, Pommes Frites, Hähnchen, Sucuk, Krautsalat, Tomaten, Gurke, Zwiebeln, Eisbergsalat, Tzatziki, Tomatensoße und frischem Brot",
        price: "2 Personen: 40 € / 4 Personen: 60 €",
      },
    ],
  },
  {
    name: "GETRÄNKE",
    description: "Erfrischende Getränke",
    color: "bg-white",
    image: "/images/getränke.png",
    items: [
      { name: "125. Coca Cola / Fanta / Sprite", description: "(0,33 ltr.)", price: "2,50 €" },
      { name: "126. Coca Cola / Fanta / Sprite", description: "(1 ltr.)", price: "4,00 €" },
      { name: "127. Vita-Malz", description: "(0,33 ltr.)", price: "3,00 €" },
      { name: "128. Wasser", description: "(0,33 ltr.)", price: "2,00 €" },
      { name: "129. Ayran", description: "", price: "2,00 €" },
    ],
  },
  {
    name: "BAGUETTES",
    description: "Frisch belegte Baguettes mit verschiedenen Füllungen",
    color: "bg-red-600",
    image: "/images/baguettes.png",
    items: [
      {
        name: "75. Kebab Baguette",
        description: "mit Hackfleisch vom Drehspieß, Remoulade, Gurken und Eisbergsalat ",
        price: "8,00 €",
      },
      { name: "76. Hähnchen Baguette", description: "mit Hähnchen, Remoulade, Gurken und Eisbergsalat", price: "8,00 €" },
      {
        name: "77. Thunfisch Baguette",
        description: "mit Thunfisch, Remoulade, Gurken und Eisbergsalat",
        price: "8,00 €",
      },
      {
        name: "78. Salami Schinken Baguette",
        description: "mit Salami, Putenschinken, Remoulade, Gurken und Eisbergsalat",
        price: "8,50 €",
      },
      {
        name: "79. Avanti Special Baguette",
        description: "mit Hackfleisch vom Drehspieß, Hähnchen, Sauce Hollandaise, Chesterkäse, Remoulade,Gurken und Eisbergsalat",
        price: "8,50 €",
      },
      {
        name: "80. Salami Baguette",
        description: "mit Salami, Käse, EisbergSalat, Gurken und Remoulade",
        price: "8,00 €",
      },
      {
        name: "81. Hirtenkäse Baguette",
        description: "mit Hirtenkäse, Käse, Gurken, Eisbergsalat, Peperoni und Remoulade",
        price: "8,50 €",
      },
      {
        name: "82. Moritz Baguette",
        description: "mit Sucuk, Eisbergsalat und Remoulade",
        price: "8,50 €",
      },
    ],
  },
]

export function MenuCategories() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null)

  const toggleCategory = (index: number) => {
    if (expandedCategory === index) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(index)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8">
      {menuCategories.map((category, index) => (
        <Card
          key={index}
          className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700/80 transition-colors overflow-hidden relative"
        >
          {/* Background image with shadow overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover opacity-30"
            />
          </div>

          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-1 ${category.color}`}></div>
              <h3 className="text-2xl font-bold text-white">{category.name}</h3>
            </div>
            <p className="text-zinc-300 mb-4">{category.description}</p>

            <AnimatePresence>
              {expandedCategory === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 overflow-hidden"
                >
                  <div className="space-y-4 pt-2 pb-3 border-t border-zinc-700">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`p-3 rounded-md ${item.highlight ? "bg-red-900/30 border-l-4 border-red-600" : "hover:bg-zinc-700/50"} ${item.new ? "relative" : ""}`}
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                          <div className="flex-1 mb-2 sm:mb-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-white">{item.name}</span>
                              {item.new && (
                                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded">NEU</span>
                              )}
                            </div>
                            <span className="text-zinc-400 text-sm block mt-1">{item.description}</span>
                          </div>
                          <span className="text-red-500 font-medium text-right sm:text-left sm:whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="link"
              className="text-red-500 hover:text-red-400 p-0 flex items-center"
              onClick={() => toggleCategory(index)}
            >
              {expandedCategory === index ? (
                <>
                  Weniger anzeigen <ChevronDown className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Mehr anzeigen <ChevronRight className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
