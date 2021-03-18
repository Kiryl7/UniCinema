import React from "react"
import { screen, render, fireEvent } from "@testing-library/react"
import SearchFilter from "./SearchFilter"

it ("render correctly", () => {
    const { container } = render(<SearchFilter/>)
    screen.getByText("SEARCH BY")
    screen.getByText("TITLE")
    screen.getByText("GENRE")

    const byTitle = container.querySelector("#fid_1")
    const byGenre = container.querySelector("#fid_2")

    expect(byTitle.checked).toBe(true)
    expect(byGenre.checked).toBe(false)
})