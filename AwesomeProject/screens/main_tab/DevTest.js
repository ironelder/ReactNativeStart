export const dev = {
  title : {
    name : '체크리스트',
    update_date : '오늘 오전 12:33'
  },
  contents : {
    date : '오늘 01.22.수요일',
    items : [
        {
          count:2,
          name:'선결제 누락'
        },
        {
          count:5,
          name:'후결제 누락'
        },
        {
          count:4,
          name:'신용카드 누락'
        },
        {
          count:5,
          name:'매출취소'
        },
        {
          count:4,
          name:'부정댓글'
        }
      ]
  }
};

export const checklistData = {
  datas : [
    {
      title : {
        name : '주문대행사 입금 누락'
      },
      contents : {
        count_num : 5,
        count_type : 'NUMBER',
        card_type : 'MISSING',
        items : [
          {
            name : '입금예정',
            value : 120000,
            type : 'MONEY'
          },
          {
            name : '계좌입금',
            value : 100000,
            type : 'MONEY'
          }
        ]
      }
    },
    {
      title : {
        name : '후결제 누락'
      },
      contents : {
        count_num : 5,
        count_type : 'NUMBER',
        card_type : 'MISSING',
        items : [
          {
            name : '누락금액',
            value : 120000,
            type : 'MONEY'
          },
          {
            name : '추가금액',
            value : 10000,
            type : 'MONEY'
          }
        ]
      }
    },
    {
      title : {
        name : '신용카드 누락'
      },
      contents : {
        count_num : 5,
        count_type : 'NUMBER',
        card_type : 'MISSING',
        items : [
          {
            name : '전체 건수',
            value : 76,
            type : 'NUMBER'
          }
        ]
      }
    },
    {
      title : {
        name : '매출 취소'
      },
      contents : {
        count_num : 6,
        count_type : 'NUMBER',
        card_type : 'CANCEL',
        items : [
          {
            name : '취소',
            count : 3,
            value : 48000,
            type : 'NUMBER_MONEY'
          },
          {
            name : '반품',
            count : 3,
            value : 50000,
            type : 'NUMBER_MONEY'
          },
          {
            name : '합계',
            value : 98000,
            type : 'MONEY'
          }
        ]
      }
    },
    {
      title : {
        name : '부정댓글'
      },
      contents : {
        count_num : 4,
        count_type : 'NUMBER',
        card_type : 'COMMENT',
        items : [
          {
            name : '전체 건수',
            value : 76,
            type : 'NUMBER'
          }
        ]
      }
    }
  ]
}