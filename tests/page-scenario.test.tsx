import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

test('Login Scenario', ()=>{
  render(<Home />)
  expect(screen.getByRole('heading', {level: 1, name: 'Title'}))
})
