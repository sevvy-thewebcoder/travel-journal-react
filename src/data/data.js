import Img1 from "../assets/Japan.jpg"
import Img2 from "../assets/Sydney.jpg"
import Img3 from "../assets/Norway.jpg"

const data = [
    {
        id: 1,
        cardImg: Img1,
        location: "Japan",
        title: "Mount Fuji",
        timePeriod: {
            dateFrom: "12 Jan, 2022",
            dateTo: "24 Jan, 2022"
        },
        desc: `
            Mount Fuji is the tallest mountain in Japan, 
            standing at 3,776 meters (12,380 feet). 
            Mount Fuji is the single most popular tourist site in Japan, 
            for both Japanese and foreign tourists.
        `
    },

    {
        id: 2,
        cardImg: Img2,
        location: "Australia",
        title: "Sydney Opera House",
        timePeriod: {
            dateFrom: "27 May, 2022",
            dateTo: "08 Jun, 2022"
        },
        desc: `
            The Sydney Opera House is a multi-venue 
            performing arts centre in Sydney. 
            Located on the banks of the Sydney Harbour, 
            it is often regarded as one of the 20th century's 
            most famous and distinctive buildings
        `
    },

    {
        id: 3,
        cardImg: Img3,
        location: "Norway",
        title: "Geirangerfjord",
        timePeriod: {
            dateFrom: "01 Oct, 2022",
            dateTo: "18 Nov, 2022"
        },
        desc: `
            The Geiranger Fjord is a fjord in the Sunnmøre region 
            of Møre og Romsdal county, Norway. 
            It is located entirely in the Stranda Municipality.
        `
    }
]

export default data