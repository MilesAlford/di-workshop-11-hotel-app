const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {
    it('should instantate properly', ()=> {
        var hotel = new Hotel("Hilton Metropole", "London")
      expect(hotel.name).to.equal("Hilton Metropole")
      expect(hotel.city).to.equal("London")
      expect(hotel.reviews).to.deep.equal([])
    })


it('should count the reviews', ()=>{
    //1. setup
    var hotel = new Hotel("Hilton Metropole", "London")
    
    //2. Exercise
    var count = hotel.reviewCount()
    
    //3. Verify
    expect(count).to.equal(0)

    //4. Teardown (Nothing to do)
})

it('should return 0 ratings when no reviews', ()=>{
    var hotel = new Hotel("Hilton Metropole", "London")
    expect(hotel.rating()).to.equal(0)   
})
// TODO: Implement a second test for ratings when review is not empty

it('should return no stars when no reviews ', ()=>{
    var hotel = new Hotel("Hilton Metropole", "London")
    expect(hotel.ratingAsStars()).to.equal('')   
})

it('should return the url slug', ()=>{
    var hotel = new Hotel("Hilton Metropole", "London")
    expect(hotel.urlSlug()).to.equal("hilton_metropole_london")   
})

it('should return the url slug when there are lots of spaces', ()=>{
    var hotel = new Hotel("One Two Three", "Four Five Six")
    expect(hotel.urlSlug()).to.equal("one_two_three_four_five_six")   
})



});