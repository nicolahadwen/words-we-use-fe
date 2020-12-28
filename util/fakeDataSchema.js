// eslint-disable-next-line no-unused-vars
const schema = [
  '{{repeat(9, 9)}}',
  {
    phraseId: '{{guid()}}',
    phrase: '{{lorem(1, "words")}}',
    topDescription: {
      description: '{{lorem(1)}}',
      voteCount: '{{integer(20, 1000)}}'
    },
    addtionalDescriptions: [
      '{{repeat(3)}}',
      {
        description: '{{lorem(1)}}',
        votes: {
          positive: '{{integer(20, 1000)}}',
          negative: '{{integer(20, 1000)}}'
        }
      }],
    firstReportDetails : {
      username: '{{firstName()}} {{surname()}}',
      locationDescription: '{{city()}}, {{country()}}',
      datetime: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd")}}',
    }
  }
]