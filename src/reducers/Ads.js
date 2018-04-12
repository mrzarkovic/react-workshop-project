// Actions
const ADS = {
    createAds: 'ADS::CREATE_ADS',
    addAd: 'ADS::ADD_AD'
}

const defaultReducer = {
    ads: []
}

// Reducer
export default function reducer (state = defaultReducer, action) {
    switch (action.type) {
        case ADS.createAds:
            return {
                ads: [
                    {
                        title: 'Moj oglas',
                        description: 'Opis mog oglasa',
                        price: '114 din',
                        stats: {
                            viewsCount: 300,
                            renewed: true,
                            postedTime: 'Pre 4 nedelje',
                            followers: 10
                        },
                        location: 'Beograd | Vozdovac'
                    },
                    {
                        title: 'Moj drugi oglas',
                        description: 'Opis mog drugog oglasa',
                        price: '232 din',
                        stats: {
                            viewsCount: 285,
                            renewed: false,
                            postedTime: 'Pre 2 nedelje',
                            followers: 4
                        },
                        location: 'Novi Sad'
                    }
                ]
            }
        case ADS.addAd:
            return {
                ads: [...state.ads, action.payload]
            }
        default:
            return state;
    }
}

// Actions Creator
export function createAds () {
    return {
        type: ADS.createAds,
        payload: null
    }
}

export function addAd (ad) {
    return {
        type: ADS.addAd,
        payload: ad
    }
}