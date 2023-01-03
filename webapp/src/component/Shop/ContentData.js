export default [
    {
        id: 1,
        maindesc: '프리미엄순',
        subdesc: '발매가 대비 가격이 높은 순서대로 정렬합니다.',
        sort: 'PremiumSort',
    },
    {
        id: 2,
        maindesc: '즉시 구매가순',
        subdesc: '즉시 구매가가 낮은 순서대로 정렬합니다.',
        sort: 'BuySort',
    },
    {
        id: 3,
        maindesc: '즉시 판매가순',
        subdesc: '즉시 판매가가 높은 순서대로 정렬합니다.',
        sort: 'SellSort',
    },
    {
        id: 4,
        maindesc: '발매일순',
        subdesc:
            '최신 상품 순서대로 정렬합니다. 아직 발매 전인 상품이 노출될 수 있습니다.',
        sort: 'releaseDateSort',
    },
];
