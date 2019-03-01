import moment from 'moment'

export const state = () => ({
  words: [
    {
      id: 1,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: [
        'Laravel scaffold the authentication functionality in an application using a single artisan command.',
        'Construction workers use a scaffold to help them in reaching high areas in the building.'
      ]
    },
    {
      id: 2,
      wordText: 'Hesitat',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    },
    {
      id: 3,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    },
    {
      id: 4,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    },
    {
      id: 5,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    },
    {
      id: 6,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    },
    {
      id: 7,
      wordText: 'Scaffolding',
      createdAt: '21/2/2019, 10:55:00 PM',
      examples: ['', '']
    }
  ]
})

export const mutations = {
  addWordToBag(state, payload) {
    const wordId = state.words.length + 1

    state.words.push({
      id: wordId,
      wordText: payload.wordText,
      examples: Object.values(payload.examples),
      createdAt: moment().format('DD/MM/YYYY, h:mm:ss a')
    })
  }
}

export const getters = {
  getAllWords: state => {
    return state.words
  },
  getWordById: state => ({ id }) => {
    id = parseInt(id)
    return state.words.find(word => word.id === id)
  },
  getWordByText: state => wordText => {
    return state.words.find(word => word.wordText === wordText)
  }
}
