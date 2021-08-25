const app = Vue.createApp({
    data() {
        return {
            club: 'Arsenal',
            playerIndex: 0,
            playerImages: [
                { id: 0, url: 'Bellerin.jpg' },
                { id: 1, url: 'Tierney.jpg' },
                { id: 2, url: 'White.jpg' },
                { id: 3, url: 'Aubameyang.jpg' },
                { id: 4, url: 'Gabriel.jpg' },
                { id: 5, url: 'Lacazette.jpg' },
                { id: 6, url: 'Partey.jpg' },
                { id: 7, url: 'Holding.jpg' },
                { id: 8, url: 'SmithRowe.jpg' },
                { id: 9, url: 'Martinelli.jpg' },
                { id: 10, url: 'Saka.jpg' },
                { id: 11, url: 'Pepe.jpg' },
                { id: 12, url: 'Tavares.jpg' },
                { id: 13, url: 'Soares.jpg' },
                { id: 14, url: 'Mari.jpg' },
                { id: 15, url: 'Chambers.jpg' },
                { id: 16, url: 'Xhaka.jpg' },
                { id: 17, url: 'Torreira.jpg' },
                { id: 18, url: 'MaitlandNiles.jpg' },
                { id: 19, url: 'Elneny.jpg' },
                { id: 20, url: 'Lokonga.jpg' }
            ],
            playerProfile: [
                { id: 2, name: 'Hector Bellerin', position: 'Defender', nationality: 'Spanish', age: 26, dob: '19 March 1995' },
                { id: 3, name: 'Kieren Tierney', position: 'Defender', nationality: 'Scottish', age: 24, dob: '5 June 1997' },
                { id: 4, name: 'Ben White', position: 'Defender', nationality: 'English', age: 23, dob: '8 October 1997' },
                { id: 14, name: 'Pierre Emerick Aubameyang', position: 'Forward', nationality: 'Gabonese', age:32, dob: '18 June 1989' },
                { id: 6, name: 'Gabriel dos Santos Magalhaes', position: 'Defender', nationality: 'Brazilian', age: 23, dob: '19 December 1997' },
                { id: 9, name: 'Alexandre Lacazette', position: 'Forward', nationality: 'French', age: 30, dob: '28 May 1991' },
                { id: 5, name: 'Thomas Partey', position: 'Midfielder', nationality: 'Ghanain', age: 28, dob: '13 June 1993' },
                { id: 16, name: 'Rob Holding', position: 'Defender', nationality: 'English', age: 25, dob: '20 September 1995' },
                { id: 10, name: 'Emile Smith-Rowe', position: 'Midfielder', nationality: 'English', age: 21, dob: '28 July 2000' },
                { id: 35, name: 'Gabriel Martinelli', position: 'Forward', nationality: 'Brazilian', age: 20, dob: '18 June 2001' },
                { id: 7, name: 'Bakayo Saka', position: 'Midfielder', nationality: 'English', age: 19, dob: '5 September 2001' },
                { id: 19, name: 'Nicolas Pepe', position: 'Midfielder', nationality: 'Ivorian', age: 26, dob: '29 May 1995' },
                { id: 20, name: 'Nuno Tavares', position: 'Defender', nationality: 'Portuguese', age: 21, dob: '26 January 2000' },
                { id: 17, name: 'Cedric Soares', position: 'Defender', nationality: 'Spanish', age: 29, dob: '31 August 1991' },
                { id: 22, name: 'Pablo Mari', position: 'Defender', nationality: 'Spanish', age: 27, dob: '31 August 1993' },
                { id: 21, name: 'Callum Chambers', position: 'Defender', nationality: 'English', age: 26, dob: '20 January 1995' },
                { id: 34, name: 'Granit Xhaka', position: 'Midfielder', nationality: 'Swiss', age: 28, dob: '27 September 1992' },
                { id: 11, name: 'Lucas Torreira', position: 'Midfielder', nationality: 'Uruguayan', age: 25, dob: '11 February 1996' },
                { id: 15, name: 'Ainsley Maitland-Niles', position: 'Defender', nationality: 'English', age: 23, dob: '29 August 1997' },
                { id: 25, name: 'Mohamed Elneny', position: 'Midfielder', nationality: 'Egyptian', age: 29, dob: '11 July 1992' },
                { id: 23, name: 'Sambi Lokonga', position: 'Midfielder', nationality: 'Belgian', age: 21, dob: '22 October 1999' }
            ]
        }
    },
    methods: {
        updatePlayerIndex(index) {
            return this.playerIndex = index
        }
    },
    computed: {
        image() {
            return this.playerImages[this.playerIndex].url
        },
        profile() {
            return this.playerProfile[this.playerIndex]
        }
    }
})