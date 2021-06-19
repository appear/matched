import ItemCard from './ItemCard'

export default {
  title: 'elements/ItemCard',
  components: ItemCard,
}

export const 기본 = () => {
  const item = {
    title: '[스타트업] 스터디 매칭 서비스',
    imageUrl:
      'https://pbs.twimg.com/profile_images/968000221543202817/f92oypNr_400x400.jpg',
    recurit: ['개발자', '기획자'],
    location: '서울 강남구',
  }

  return (
    <>
      <ItemCard item={item} />
      <ItemCard item={item} />
    </>
  )
}
