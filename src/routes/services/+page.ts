import Thumb   from "./_assets/img/thumb.jpeg?enhanced&format=webp"

const popular = [
    {
        title: 'Платная скорая помощь',
        img: Thumb.img.src,
        key: '1'
    },
    {
        title: 'Водительская медкомиссия',
        img: Thumb.img.src,
        key: '2'
    },
    {
        title: 'Промывание носа',
        img: Thumb.img.src,
        key: '3'
    },
    {
        title: 'Удаление родинки',
        img: Thumb.img.src,
        key: '4'
    },
    {
        title: 'Прокол ушей',
        img: Thumb.img.src,
        key: '5'
    },
    {
        title: 'Лазерное удаление папиллом',
        img: Thumb.img.src,
        key: '6'
    },
    {
        title: 'Платные роды',
        img: Thumb.img.src,
        key: '7'
    },
    {
        title: 'Чистка зубов',
        img: Thumb.img.src,
        key: '8'
    },
    {
        title: 'Медицинские карты и справки',
        img: Thumb.img.src,
        key: '9'
    },
    {
        title: 'Массаж',
        img: Thumb.img.src,
        key: '10'
    },
    {
        title: 'Вызов врача на дом',
        img: Thumb.img.src,
        key: '11'
    }
]

const clinic = [
    {
        title: 'Акушерство',
        img: Thumb.img.src,
        key: '1'
    },
    {
        title: 'Аллергология-иммунология',
        img: Thumb.img.src,
        key: '2'
    },
    {
        title: 'Анализы',
        img: Thumb.img.src,
        key: '3'
    },
    {
        title: 'Андрология',
        img: Thumb.img.src,
        key: '4'
    },
    {
        title: 'Вакцинация',
        img: Thumb.img.src,
        key: '5'
    },
    {
        title: 'Гастроэнтерология',
        img: Thumb.img.src,
        key: '6'
    },
    {
        title: 'Гинекология',
        img: Thumb.img.src,
        key: '7'
    },
    {
        title: 'Дерматология',
        img: Thumb.img.src,
        key: '5'
    },
    {
        title: 'Кардиология',
        img: Thumb.img.src,
        key: '6'
    },
    {
        title: 'Косметология',
        img: Thumb.img.src,
        key: '7'
    },
]

export const load = async () => {
    return {
        popular,
        clinic,
    }
}



