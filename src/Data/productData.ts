import img1 from './productImg/1.jpg';
import img2 from './productImg/2.jpg';
import img3 from './productImg/3.jpg'
import img4 from './productImg/4.jpg'
import img5 from './productImg/5.jpg'
import img6 from './productImg/6.jpg'
import img7 from './productImg/7.jpg'
import img8 from './productImg/8.jpg'
import img9 from './productImg/9.jpg'
import img10 from './productImg/10.jpg'
import img11 from './productImg/11.jpg'
import img12 from './productImg/12.jpg'
import img13 from './productImg/13.jpg'
import img14 from './productImg/14.jpg'
import img15 from './productImg/15.jpg'
import img16 from './productImg/16.jpg'
import img17 from './productImg/17.jpg'
import img18 from './productImg/18.jpg'
import img19 from './productImg/19.jpg'
import img20 from './productImg/20.jpg'
import img21 from './productImg/21.jpg'
import img22 from './productImg/22.jpg'
import img23 from './productImg/23.jpg'
import img24 from './productImg/24.jpg'
import img25 from './productImg/25.jpg'
import img26 from './productImg/26.jpg'
import imgf1 from './productImg/f1.jpg'
import imgf2 from './productImg/f2.jpg'
import imgf3 from './productImg/f3.jpg'
import imgf4 from './productImg/f4.jpg'
import imgf5 from './productImg/f5.jpg'
import imgf6 from './productImg/f6.jpg'
import imgf7 from './productImg/f7.jpg'
import imgf8 from './productImg/f8.jpg'
import imgn1 from './productImg/n1.jpg'
import imgn2 from './productImg/n2.jpg'
import imgn3 from './productImg/n3.jpg'
import imgn4 from './productImg/n4.jpg'
import imgn5 from './productImg/n5.jpg'
import imgn6 from './productImg/n6.jpg'
import imgn7 from './productImg/n7.jpg'
import imgn8 from './productImg/n8.jpg'

export type ProductType = {
    id:number,
    title: string,
    img:string,
    price: number,
    count:number,
    evaluation: 1 | 2 | 3 | 4 | 5 ;
    status : "normal" | "new" | "featured",
    type: "all"|"shoes"|"jacket"|"shirt"|"bag"|"hat"|"pants"|"watch"|"",
}

export const Products: ProductType[] = [
    {
        id:1,
        title: "blue shirt",
        img:`${img1}`,
        price : 120,
        count:20,
        evaluation:4,
        status:"normal",
        type:"shirt",
    },
    {
        id:2,
        title: "white shoes",
        img:`${img2}`,
        price : 30,
        count:12,
        evaluation:3,
        status:"normal",
        type:"shoes",
    },
    {
        id:3,
        title: "blue bag",
        img:`${img3}`,
        price : 14,
        count:15,
        evaluation:4,
        status:"normal",
        type:"bag",
    },
    {
        id:4,
        title: "blue shoes",
        img:`${img4}`,
        price : 32,
        count:4,
        evaluation:5,
        status:"normal",
        type:"shoes",
    },
    {
        id:5,
        title: "gray hat",
        img:`${img5}`,
        price : 4,
        count:40,
        evaluation:2,
        status:"normal",
        type:"hat",
    },
    {
        id:6,
        title: "red jacket",
        img:`${img6}`,
        price : 230,
        count:16,
        evaluation:5,
        status:"normal",
        type:"jacket",
    },
    {
        id:7,
        title: "blue shoes",
        img:`${img7}`,
        price : 50,
        count:8,
        evaluation:2,
        status:"normal",
        type:"shoes",
    },
    {
        id:8,
        title: "blue jacket",
        img:`${img8}`,
        price : 345,
        count:2,
        evaluation:5,
        status:"normal",
        type:"jacket",
    },
    {
        id:9,
        title: "green bag",
        img:`${img9}`,
        price : 35,
        count:12,
        evaluation:4,
        status:"normal",
        type:"bag",
    },
    {
        id:10,
        title: "gray watch",
        img:`${img10}`,
        price : 30,
        count:6,
        evaluation:3,
        status:"normal",
        type:"watch",
    },
    {
        id:11,
        title: "blue hat",
        img:`${img11}`,
        price : 24,
        count:27,
        evaluation:2,
        status:"normal",
        type:"hat",
    },
    {
        id:12,
        title: "white shoes",
        img:`${img12}`,
        price : 44,
        count:7,
        evaluation:5,
        status:"normal",
        type:"shoes",
    },
    {
        id:13,
        title: "white watch",
        img:`${img13}`,
        price : 30,
        count:4,
        evaluation:5,
        status:"normal",
        type:"watch",
    },
    {
        id:14,
        title: "red shoes",
        img:`${img14}`,
        price : 99,
        count:4,
        evaluation:5,
        status:"normal",
        type:"shoes",
    },
    {
        id:15,
        title: "gray hat",
        img:`${img15}`,
        price : 22,
        count:19,
        evaluation:4,
        status:"normal",
        type:"hat",
    },
    {
        id:16,
        title: "purple shirt",
        img:`${img16}`,
        price : 80,
        count:8,
        evaluation:5,
        status:"normal",
        type:"shirt",
    },
    {
        id:17,
        title: "colorful jacket",
        img:`${img17}`,
        price : 300,
        count:4,
        evaluation:4,
        status:"normal",
        type:"jacket",
    },
    {
        id:18,
        title: "yellow hat",
        img:`${img18}`,
        price : 30,
        count:16,
        evaluation:4,
        status:"normal",
        type:"hat",
    },
    {
        id:19,
        title: "black jacket",
        img:`${img19}`,
        price : 170,
        count:9,
        evaluation:5,
        status:"normal",
        type:"jacket",
    },
    {
        id:20,
        title: "orange jacket",
        img:`${img20}`,
        price : 180,
        count:14,
        evaluation:5,
        status:"normal",
        type:"jacket",
    },
    {
        id:21,
        title: "black shirt",
        img:`${img21}`,
        price : 230,
        count:12,
        evaluation:4,
        status:"normal",
        type:"shirt",
    },
    {
        id:22,
        title: "blue bag",
        img:`${img22}`,
        price : 44,
        count:3,
        evaluation:5,
        status:"normal",
        type:"bag",
    },
    {
        id:23,
        title: "green shirt",
        img:`${img23}`,
        price : 140,
        count:19,
        evaluation:4,
        status:"normal",
        type:"shirt",
    },
    {
        id:24,
        title: "white shirt",
        img:`${img24}`,
        price : 146,
        count:17,
        evaluation:3,
        status:"normal",
        type:"shirt",
    },
    {
        id:25,
        title: "red shirt",
        img:`${img25}`,
        price : 160,
        count:13,
        evaluation:5,
        status:"normal",
        type:"shirt",
    },
    {
        id:26,
        title: "green shirt",
        img:`${img26}`,
        price : 210,
        count:9,
        evaluation:3,
        status:"normal",
        type:"shirt",
    },
    {
        id:27,
        title: "molo shirt",
        img:`${imgf1}`,
        price : 510,
        count:2,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:28,
        title: "molo shirt",
        img:`${imgf2}`,
        price : 540,
        count:4,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:29,
        title: "colorful shirt",
        img:`${imgf3}`,
        price : 310,
        count:6,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:30,
        title: "white shirt",
        img:`${imgf4}`,
        price : 566,
        count:3,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:31,
        title: "purple shirt",
        img:`${imgf5}`,
        price : 470,
        count:1,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:32,
        title: "orange shirt",
        img:`${imgf6}`,
        price : 634,
        count:2,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:33,
        title: "white pants",
        img:`${imgf7}`,
        price : 330,
        count:7,
        evaluation:2,
        status:"featured",
        type:"pants",
    },
    {
        id:34,
        title: "stripe shirt",
        img:`${imgf8}`,
        price : 410,
        count:3,
        evaluation:5,
        status:"featured",
        type:"shirt",
    },
    {
        id:35,
        title: "white shirt",
        img:`${imgn1}`,
        price : 710,
        count:40,
        evaluation:4,
        status:"new",
        type:"shirt",
    },
    {
        id:36,
        title: "black shirt",
        img:`${imgn2}`,
        price : 810,
        count:20,
        evaluation:5,
        status:"new",
        type:"shirt",
    },
    {
        id:37,
        title: "blue shirt",
        img:`${imgn3}`,
        price : 310,
        count:30,
        evaluation:5,
        status:"new",
        type:"shirt",
    },
    {
        id:38,
        title: "green shirt",
        img:`${imgn4}`,
        price : 210,
        count:50,
        evaluation:3,
        status:"new",
        type:"shirt",
    },
    {
        id:39,
        title: "blue shirt",
        img:`${imgn5}`,
        price : 760,
        count:20,
        evaluation:5,
        status:"new",
        type:"shirt",
    },
    {
        id:40,
        title: "gray pants",
        img:`${imgn6}`,
        price : 462,
        count:71,
        evaluation:4,
        status:"new",
        type:"pants",
    },
    {
        id:41,
        title: "orange shirt",
        img:`${imgn7}`,
        price : 310,
        count:10,
        evaluation:5,
        status:"new",
        type:"shirt",
    },
    {
        id:42,
        title: "black shirt",
        img:`${imgn8}`,
        price : 612,
        count:33,
        evaluation:3,
        status:"new",
        type:"shirt",
    },
]