import ass from './assets/ass.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/block'

const text = `Все к <a href="https://github.com/batya-bicha" target="_blank">Вовчику</a>`

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(ass, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'hahaha'
    }),
    new ColumnsBlock([
        'Hello',
        'Прикольно конечно, но да',
        'Понятно, что хорошо',
        'Спасибо и вам'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0);',
            color: '#fff',
            padding: '2rem',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]