export interface SongProps {
    id: string;
    name: string;
    status: 'default' | 'playing' | 'locked';
}

export interface PlaylistProps {
    id: string;
    name: string;
    category: string;
    image: string;
    cover: string;
    about: string;
    songs: SongProps[]; 
}

export const playlistData: PlaylistProps[] = [
    {
        id: '1',
        name:  'Guitar Camp',
        category: 'Instrumental',
        image: require('../assets/playlist-guitar-camp.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'An acoustic mix has been specially selected for you. The camping atmosphere will help you improve your sleep and your body as a whole. Your dream will be delighful and vivid.',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
        
    },
    {
        id: '2',
        name:  'Chill-hop',
        category: 'Instrumental',
        image: require('../assets/playlist-chillhop.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet debitis fugiat minima a sapiente doloremque ullam aperiam officia, consequuntur neque eaque accusamus!',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
    },
    {
        id: '3',
        name:  'Nature feels',
        category: 'Nature',
        image: require('../assets/playlist-nature.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste in corrupti quibusdam, mollitia placeat libero unde reprehenderit asperiores modi. At amet fuga porro consequuntur.',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
    },
    {
        id: '4',
        name:  'Sundown',
        category: 'For Kids',
        image: require('../assets/playlist-sundown.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'An acoustic mix has been specially selected for you. The camping atmosphere will help you improve your sleep and your body as a whole. Your dream will be delighful and vivid.',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
    },
    {
        id: '5',
        name:  'Space Travel',
        category: 'Ambient',
        image: require('../assets/playlist-space-travel.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'An acoustic mix has been specially selected for you. The camping atmosphere will help you improve your sleep and your body as a whole. Your dream will be delighful and vivid.',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
    },
    {
        id: '6',
        name:  'Lullaby',
        category: 'Instrumental',
        image: require('../assets/playlist-lullaby.png'),
        cover: require('../assets/cover-guitar-camp.png'),
        about: 'An acoustic mix has been specially selected for you. The camping atmosphere will help you improve your sleep and your body as a whole. Your dream will be delighful and vivid.',
        songs: [
            {
                id: '1',
                name: 'The Guitars',
                status: 'default'
            },
            {
                id: '2',
                name: 'Lost Without You',
                status: 'playing'
            },
            {
                id: '3',
                name: 'City Lights',
                status: 'locked'
            },
            {
                id: '4',
                name: 'Romantic',
                status: 'locked'
            },
        ]
    },
]