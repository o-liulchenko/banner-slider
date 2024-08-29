import bleach from './assets/bleach.jpg'
import jjk from './assets/jujutsu-kaisen.jpg'
import madoka from './assets/madoka.jpg'
import mdzs from './assets/mdzs.jpg'
import sailorMoon from './assets/sailor-moon.jpg'

export interface anime {
    _id: string;
    name: string;
    description: string;
    image: string;
}

export const animeList:anime[] = [
    {
        _id: '1',
        name: 'Bleach',
        description: 'Bleach follows the adventures of Ichigo Kurosaki, a high school student with the ability to see ghosts, and Rukia Kuchiki, a Shinigami.',
        image: bleach
    },
    {
        _id: '2',
        name: 'Jujutsu Kaisen',
        description: 'Jujutsu Kaisen follows the story of Yuji Itadori, an ordinary boy who crosses paths with Megumi Fushiguro, a Jujutsu Sorcerer searching for a powerful Cursed Object known as Ryomen Sukuna\'s finger.',
        image: jjk
    },
    {
        _id: '3',
        name: 'Madoka Magica',
        description: 'The story follows a group of middle school girls, led by protagonist Madoka Kaname, who make supernatural contracts to become magical girls.',
        image: madoka
    },
    {
        _id: '4',
        name: 'Mo Dao Zu Shi',
        description: 'The series depicts a fictional xianxia world where humans attempt to cultivate to a state of immortality, known as xian.',
        image: mdzs
    },
    {
        _id: '5',
        name: 'Sailor Moon',
        description: 'The series follows the adventures of the titular protagonist whose name is Usagi Tsukino, a middle school student who is given the power to become a Pretty Soldier.',
        image: sailorMoon
    },
]