import '@/styles/components/item.scss';

export default function PostItem() {
  return (
    <div className="post-item flex">
      <div className="post-img img-full">
        <img src={`https://picsum.photos/seed/1/1500`} alt={'포스트 이미지'} />
      </div>
      <div className="post-content flex flex-col">
        <div className="post-txt ">
          <h5 className="post-title ellipsis1">
            [일간랭킹: 4월 19일] 에이티투메이저(82MAJOR )의 ‘SILENCE SYNDROME’
            1위 - 일간랭킹일간랭킹
          </h5>
          <p className="post-desc ellipsis3">
            4월 20일, 세계 유일의 실시간 음악차트를 서비스하고 있는 한터차트가
            4월 19일의 일간 음반랭킹을 공개했다. 4월 19일의 일간 음반랭킹 1위는
            에이티투메이저(82MAJOR )의 ‘SILENCE SYNDROME’ 앨범이다. 한터 4월
            20일, 세계 유일의 실시간 음악차트를 서비스하고 있는 한터차트가 4월
            19일의 일간 음반랭킹을 공개했다. 4월 19일의 일간 음반랭킹 1위는
            에이티투메이저(82MAJOR )의 ‘SILENCE SYNDROME’ 앨범이다. 한터 4월
            20일, 세계 유일의 실시간 음악차트를 서비스하고 있는 한터차트가 4월
            19일의 일간 음반랭킹을 공개했다. 4월 19일의 일간 음반랭킹 1위는
            에이티투메이저(82MAJOR )의 ‘SILENCE SYNDROME’ 앨범이다. 한터 4월
            20일, 세계 유일의 실시간 음악차트를 서비스하고 있는 한터차트가 4월
            19일의 일간 음반랭킹을 공개했다. 4월 19일의 일간 음반랭킹 1위는
            에이티투메이저(82MAJOR )의 ‘SILENCE SYNDROME’ 앨범이다. 한터
          </p>
        </div>
        <div className="post-info">
          <span className="wirter">조여진</span>
          <span className="date">2024.10.10</span>
        </div>
      </div>
    </div>
  );
}
