import RecommendUser from './RecommendUser'

export default {
  title: 'elements/RecommendUser',
  components: RecommendUser,
}

export const 기본 = () => {
  const user = {
    thumbnail:
      'https://blog.kakaocdn.net/dn/9Zzgz/btqXMdPHuT7/TmDo4FvAODAsANwORhcYwk/img.png',
    name: '짱구',
    job: '기획자',
    isLike: false,
  }

  return <RecommendUser user={user} />
}
