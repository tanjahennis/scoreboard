import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import App from './App'
import Title from './components/Title'

chai.use(chaiEnzyme())

const app = shallow(<App />)

describe('<App />', () => {
  it('has a div tag'), () => {
    expect(app).to.have.tagName('div')
  })

  it('renders the Title', () => {
    expect(app).to.have.descendants(Title)
  })
}
