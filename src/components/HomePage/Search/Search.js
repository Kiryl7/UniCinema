import React from "react"
import './Search.css'

function Search() {
    return (
        <div class="box">
        <div class="container-4">
          <input type="search" id="search" placeholder="Search..." />
          <button class="icon"><i class="fa fa-search"></i></button>
        </div>
      </div>
    )
}

export default Search