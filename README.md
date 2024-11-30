# Binance Spot 거래 페이지 클론 프로젝트

## 프로젝트 개요
> 이 프로젝트는 [Binance Spot 거래 페이지](https://www.binance.com/en/trade/BTC_USDT?type=spot)를 클론하여 UI를 구현하는 과제입니다.  
주어진 요구 사항에 따라 Next.js, Tanstack Query, Tailwind CSS를 사용하여 구현하였습니다.
>
> **클론 페이지 접속:**  
>📎 https://kl-frontend-task.vercel.app/en/trade/BTCUSDT

## 기술 스택

```
Next.js 15, Typescript, TailwindCSS, Tanstack-query, Lightweight-charts
```

## 실행 방법
> [!NOTE]
>.env.local에 NEXT_PUBLIC_API_URL 환경 변수 설정이 필요합니다. (값은 [Binance API Documentation](https://binance-docs.github.io/apidocs/spot/en/#introduction)의 엔드 포인트입니다.)
```
yarn install
yarn dev
```


## 주요 기능 구현

| **기능**              | **설명**                                                                                       |  **PR 링크** |
|------------------------|---------------------------------------------------------------------------------------------|---------|
| 코인 목록 검색         | 사용자가 원하는 코인을 목록에서 검색                                          | [링크](https://github.com/dusunax/kl-frontend-task/pull/10) |
| Order Book 항목 선택  | Order Book에서 항목을 클릭했을 때, 선택한 가격을 구매/판매 가격 입력 필드에 반영       |  [링크](https://github.com/dusunax/kl-frontend-task/pull/9) |
| 차트 구현              | 금융 데이터 시각화 오픈 소스 라이브러리를 활용하여, Binance Spot 거래 페이지와 유사한 차트를 구현 |  [링크](https://github.com/dusunax/kl-frontend-task/pull/13) |
| UI 구현 | 컴파운드 컴포넌트 구현 및 SVGR 설정 | [링크](https://github.com/dusunax/kl-frontend-task/pull/3) |


## 주요 문제 해결 및 구현 고민 사항

> [프로젝트 구현 고민 사항 - 노션 문서 링크](https://dusunax.notion.site/14b41dabbb6580eaabb7c3b9e0f22db7?pvs=4)  
>  
> 링크된 페이지는 금융 데이터를 시각화하고 거래와 관련된 UI 및 기능을 제공하기 위한 프로젝트의 작업 내용을 정리한 문서입니다.   
> 구현 방식 및 라이브러리 선택 과정에서의 고민들과 발생한 문제, 그리고 결론을 기록했습니다.    
> 또한 제한된 시간 내에 목표를 달성하기 위해 효율적인 접근 방식을 채택하고자 했습니다.


## 진행 기간

- 작업 기간: 2024-11-26 - 2024-11-30
- 총 작업 시간: 23.82 시간

<img src="https://github.com/user-attachments/assets/15ebeda3-2268-4bff-b3c8-9fe84068d31f" width="500" />


## 작업 방식
### 1. Notion 문서를 활용하여 Task 단위의 작업 과정을 기록하였습니다.
- 각 작업별 소요 시간 및 진행 상황을 분석하여 속도를 측정했습니다.

<img src="https://github.com/user-attachments/assets/f6dda541-a766-4dd4-a6e6-c52742f98daa" width="600" />

### 2. PR 단위의 작업을 진행했습니다.
- 원활한 코드 리뷰를 위해, 필요 시에 Permarlink, 리뷰어에게 전달 사항, 시연 영상, 스크린샷을 첨부했습니다.

<img src="https://github.com/user-attachments/assets/9e4a1456-66ad-4923-ad32-d4bf51f13e32" width="450" />

### 3. Trunk-based development와 Squash merge를 진행했습니다.
- Network graph를 단순하게 유지하지 위해 해당 방식을 채택했습니다.
<img src="https://github.com/user-attachments/assets/057d2476-c0cc-4e48-b234-ab6cee769bf5" width="700" />

