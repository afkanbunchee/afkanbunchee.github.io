"use strict";(self.webpackChunkaf_bunchee=self.webpackChunkaf_bunchee||[]).push([[858],{5484:function(e,a,t){t.d(a,{Z:function(){return l}});var c=t(7059),A=t(7294),i=t(527),s=t(1689);function l(e){var a=e.image,l=e.header,n=e.link,g=e.children,r={"../images/accounting.png":A.createElement(c.S,{src:"../images/accounting.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(2223)}),"../images/audit.png":A.createElement(c.S,{src:"../images/audit.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(1227)}),"../images/registration.png":A.createElement(c.S,{src:"../images/registration.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(4329)}),"../images/revenue.png":A.createElement(c.S,{src:"../images/revenue.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(3509)}),"../images/socialsec.png":A.createElement(c.S,{src:"../images/socialsec.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(4921)}),"../images/taxplan.png":A.createElement(c.S,{src:"../images/taxplan.png",alt:l,layout:"fixed",placeholder:"blurred",objectFit:"contain",width:64,height:64,__imageData:t(6886)})},d=(0,A.useContext)(i.J).lang;return A.createElement("div",{className:"bg-white w-full flex flex-col items-center p-8",style:{minHeight:"357px"}},A.createElement("div",{className:"bg-green-600 p-2 rounded"},r[a]),A.createElement("h2",{className:"text-black text-opacity-90 leading-normal mt-8 text-center"},l),A.createElement("div",{className:"flex-1 text-black text-opacity-70 text-center leading-8 mt-4"},g),n&&A.createElement(s.Z,{to:n,className:"mt-4",text:"th"===d?"เพิ่มเติม":"More"}))}},5151:function(e,a,t){t.d(a,{Z:function(){return s}});var c=t(7294),A=t(1689),i={1:"lg:grid-cols-1",2:"lg:grid-cols-2",3:"lg:grid-cols-3",4:"lg:grid-cols-4",5:"lg:grid-cols-5",6:"lg:grid-cols-6",7:"lg:grid-cols-7",8:"lg:grid-cols-8",9:"lg:grid-cols-9",10:"lg:grid-cols-10",11:"lg:grid-cols-11",12:"lg:grid-cols-12"};function s(e){var a=e.header,t=e.cols,s=e.link,l=e.linkName,n=e.children;return c.createElement("div",{className:"w-full bg-gray-100 px-6 py-8"},c.createElement("div",{className:"mx-auto max-w-screen-xl flex flex-col"},c.createElement("h1",{className:"text-black text-opacity-90 leading-normal text-center mb-6"},a),c.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 "+i[t]+" gap-8"},n),s&&c.createElement(A.Z,{to:s,text:l||"",wrapped:!0,className:"mx-auto mt-8 mb-2"})))}},9092:function(e,a,t){t.r(a),t.d(a,{default:function(){return n}});var c=t(7294),A=t(5484),i=t(5151),s=t(6757),l=t(527);function n(e){var a=e.data;return c.createElement(l.J.Provider,{value:{lang:"th"}},c.createElement(s.Z,{page:"services",title:"บริการของเรา",description:"เรามีบริการที่หลากหลายที่จะรองรับธุรกิจของท่าน เช่น "+a.allServicesThJson.nodes.map((function(e){return e.name})).join(", "),url:"/services"},c.createElement(i.Z,{header:"บริการของเรา",cols:3},a.allServicesThJson.nodes.map((function(e){return c.createElement(A.Z,{image:e.image,header:e.name,link:e.link},e.description)})))))}},4329:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACH0lEQVQ4y32Uy2+NURTF721JEUURYiARUa96ToiiBkqRiMaESONZr5a2abUmIpGIicTAADEQicSoEzERE4mxf8DEn7J+smud2t+9vf2SnXO+vc9Z+7X2qQG1xUTSnDTqgLasm/+AupWbgUfAlKRpYMby2DIj6SnwElhr4PYm0OTpHnAL2ALsB/YlOQhsA+4D34H3wHrfa28JKOnAYqkDx4ELwA5Js0CX7W1NgJJGgKMlFUl1lyPsS33xnKQp7wP8M7CyOGyMcBQ4slDBk2wF3gEvXNffwKkSZSPgA0kFsNRluSN6DQw5ktBtAFZICl2v9f/SzoARYapXkUh3WaZQspe79fnGhNKHHiZv69zRSUljto143e4zV4AfknZWGpO8ZMAOoBvYBey2HAb6fPaayxDc/WJKxb16BhwrgMBqoB847bXfTsJ20Y2p2emnxMl6pk0GXCXpPDAIXAKuW39Z0h/ve4DZBNaU8ngCjGiiNkH0TuuGJf0MB5I+AB/DsW1LKk1xhOOF2PZ6R1JwbS9wEnjrOj8HvtlRd6lfpDtH7sIfYEJSb5rPjjQhQeSNwCFJv9J0TABnWxE7jH3m2CbgGTDtSL46xVdpfgPwrpv2HzBFOAnsaTFyQY/OxncRuGomVAFN7FFJT1zHAc9okWPACesHJJ3x4/DGtkrKRdYAN6KbfheHLbejQV6j02G76f/BSocLYJ7PBdJq9TY2/cf3FxqDw3ouMF7aAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/735bcd6fe16424230ef8d0c71a80c8c3/1c9ce/registration.png","srcSet":"/static/735bcd6fe16424230ef8d0c71a80c8c3/1c9ce/registration.png 64w,\\n/static/735bcd6fe16424230ef8d0c71a80c8c3/bf8e1/registration.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/735bcd6fe16424230ef8d0c71a80c8c3/8257c/registration.webp 64w,\\n/static/735bcd6fe16424230ef8d0c71a80c8c3/6766a/registration.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')},3509:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACXUlEQVQ4y3WUy0vXQRTFv2pmYZZRUYQmWS16YBll2lvDwBYtAt2E0fuNRdJLK5Io7G1FhbTLIsoWbYKoRf9D0L6/5HziyhkZf+himDsz9565574KoAwoZlqSilzH5+l0JvZ06ABeAlckDQI3gdvAAFBtw0bgjaSrwKCkeBuQdAMYltQUegmwUdIfoEdSA9AMrATeAWv9eyXwE3gILAU2eq0IR4BzE4BAuT2olfQx9ozOdWB9Cc3hYFRytxs4lTxMgNuAz8D8THEIWGcPqwxyGXjg9yrvXZJOJw9jbQW+ALMkzTbVRcAloCkL/Ang6TTJOzAFUFKLpHnhBfAeOB8JAH4Bqwx2HHiRgUTsfgBtkjYDZxNghUEjm+OSdtqgwYAR0yPASBa31Q7PDuA+8FXS0ZzyMuCTpA0+1wELM296gMpUPpLGgTXZ+3dgCmBXZNM/vwLuOSEhH8wMI0E52FzvUfg1qbArfLnf8asH5tjD2J8A/dY5Kal+pk4J4CSE0odMKTz77fswGAHaw1BSG9BpVp1e+1L9JoAzwKEsXneBxcAe30U4hiQFtb/AGNDtajgMvAV6Jyjb4BqwyXIN8NyfJEq1pp4S9sztl+xbXaOTgDEUWi1XG6Rf0gXfLXcPp3iNAn15YbtOJwE7TLNww4fB6xQGSVGHF/1+C7jj++3uqJbEKM9W0Oy1vEtSj+U2x6zwVBm2vBf4FgXvT46lGKbhWeGqf+wMttvrUcc1WutRBjZm2yXAP2DKcMindrOz12fQIgNJ8hZJC7L6q/MALkqnRlnpSJ/mw/IS/fJ8Nv4HGXT7Qd8V+WoAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/cab0f3b35726c22d82856034cb8d8914/1c9ce/revenue.png","srcSet":"/static/cab0f3b35726c22d82856034cb8d8914/1c9ce/revenue.png 64w,\\n/static/cab0f3b35726c22d82856034cb8d8914/bf8e1/revenue.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/cab0f3b35726c22d82856034cb8d8914/8257c/revenue.webp 64w,\\n/static/cab0f3b35726c22d82856034cb8d8914/6766a/revenue.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')},6886:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC4UlEQVQ4y12V26uWZRDFv+3uJrDILgpEpJN6Y5qHoozMKMIsKjAojCzdW8GLJDMTRYnyVJSa0gGh3AYdKKIDIlFIUgRBYFfRX7LW7fxinnfeb7/ti2E/7/PsmVlr1sx8I/CobAJU5/yridk3DazdzRv4jSJ6X416hz7YBvAroHn1vTXC2/oEEd4DfqwCLQAfAq+M0CiiAzAaZLoNfBr8Juh50D3gM53pXtAzoJOgD8GLI/wa6Aj4LPiGOQj9EvhX8BHQStBl0A+g58BbwN+BfgE/CH4LPAP+uUB8Br4IeiqRJv8MuB98N+go6AI4Ec0Hnwd9CroRtAr0OejjAvEs+IsIvwx6OEK7C2GDmvCXRXgx+PG8q0R39TWqmt4PvrV7b3dPgq4FPwLaOaYc4b3gFQNVJ0qYm0FLypaBMthC0PKyayrRJvDOgSiJ0HdWwMnKfgfoUoS2Vz0/Ae2K0O+gQ6DjoLPFMAPumEO5D6jrInQ9eDP4aCU5GKHNhSZVvqWj7nfLP1tpRxNlUMMVdf4IdAKcAvwFPhDhP8DfR+gN8L+gD0qs85VwU0QidF9D7QMvr8czJUqqvr/udneFb+e3QQuq904UiI2g/1He1yFsDpcK5dfgv6Gh+hP8U9f0/gd0rhjM9AjB09kZvcoDhDrdt0hEK37e7enq1O5Pgm8Cpb1XAbOG00V5iLA5/FgjdQH0W9G9Av4KtBd0FXwMdKpGsVTW9JhyV8NxwHMRXgR6GpwIJrsJ8lbw/KL5KHgpqGa4IZwaU4YcdK8uyl9C673jEW1GnwB/C36/m219E9HGMks1Wf45XVPDxn4VdHvX0LlJtA68NsKrI3wfeE195+gtqc4Y78oIPZAIhyofjvDroA2ghyCDaF2EUph2LsvzevDGjqYSWSZ5Z+7oZdbcgVtAL4BfrJWWy3UbeHshmO7UbPSmItp39t8u0KKGcLBJRrNbpKOURZ6l5vH/9W9zfjLagv0PKKwB0E+VnuIAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/f98d45982aa87087776fd1795070396b/1c9ce/taxplan.png","srcSet":"/static/f98d45982aa87087776fd1795070396b/1c9ce/taxplan.png 64w,\\n/static/f98d45982aa87087776fd1795070396b/bf8e1/taxplan.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/f98d45982aa87087776fd1795070396b/8257c/taxplan.webp 64w,\\n/static/f98d45982aa87087776fd1795070396b/6766a/taxplan.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')},2223:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACG0lEQVQ4y4WUW2+MYRSFp2WGK24ExQ0JoSmttonDFEUcosSNEDXVpieKNFVtjV5UQusUEcRvQOLP+EXrkT1Zr7wzmelcrMx7mG99a6+99lcACq0gqel6s/+lxWFJa8CqpFXgVQ5JgSrw0vtFSSWgB3gLvAP6aoRmX5I0ARwFBoCTQK9xwoh1P3AQ2ABOA/HMXWMhuJLC+VDZrrTsflRSGagA68AbYDYnfJ4kG13AR+Az8M1v7wSKJpySNASMW20QzuUeLrqsXM0WY2sThZOSzpmwz14+zQlf2KNYP7aq98AHI9bfgcsmnQHOAw+BIC5LepITLmUKt7dBrWTgAjBmsmhQHeFyELqcm76MhyaBaa/n3P2CzxLh2eh4nUJJK5nCbpc/aJ8GHKdjwC6/NAiHWxI6sMnDIvAJ2Of9HuCGcSRTOOzYBOGZqOp/bCTlhBGXquPQ6SDfM7obFFYkBWG5sctVSb0m/wFcyaKyU1KalN0NHlY8PWHLszrCLNihas2Nin2PpIUIv6RTPkuxGffUjNYRevBTyTGXB4Cfknb4vmRvS1lsgvAB8FvSrxi9/OMQHg76z7ck/QVuex8Z+wJ8BS757BEw5C4fN+Ybu3wo86242QcCuA9ctLevbVG51mUrXJG07DJGPGLXgWv+TRixsmjcVZP/CXuS/+mNeyVN2+wZl9QMs571O8A2P7s/y2xH2096q3ujIzuvrf8Bt839Z6vie6sAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/ebe4b2765df406c7775f84f2723e43e7/1c9ce/accounting.png","srcSet":"/static/ebe4b2765df406c7775f84f2723e43e7/1c9ce/accounting.png 64w,\\n/static/ebe4b2765df406c7775f84f2723e43e7/bf8e1/accounting.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/ebe4b2765df406c7775f84f2723e43e7/8257c/accounting.webp 64w,\\n/static/ebe4b2765df406c7775f84f2723e43e7/6766a/accounting.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')},1227:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAC+0lEQVQ4y31Va0uUURAeNQ3WLoS7BcuaQWFBUBBU2odu0AUiSqhQuxBd6EJQWXSTLG3NkiKXyKjwW6HlblZ+KEXIfkJkX/qcloEQBGbr+z5PjMxrxy07MLwPc+Y8M2dmzrwiIkJyTACMieFsADnBnmOTo3vumQCPLVdhhlMyHMwmeRbAcQBTHb3aqsMs16H8IwLxfT8XwCkA5wC0AtgN4BiAJwDOKHlGdFkBDpRZZlBCsgLAQwC3R0dHi4aHh/OHhoZydT+dToc9z1sAoA1AnOQeAIsD0gkRAsgnqRFsJVlP8gHJVSTLSO4guZPkNpLrST63FBwGcB+geJ6X1dfXJ25iZ/u+Hx8cHNTUTmttba3p7OxsTCaT8ba2p3WpVLK2oyMVf/Gi43YqlazyPAY1uBYUpLS0VNyqhn3fb6iurpZYLDZHREpEZJGIrCgujm3IyQlt0jMislREVpaX38n/+PHrPID1LS2PxwhDodCEooQBXO/p6dG9/IKCgqVdXW8uDAx8q3z3rmNHVVWior39/ZHe3k+JS5c6N9bUvF7X1NRT1t39tl65otHYjEgkMt0ljFjupL+/Xwwf//z5i/z48XMJydiHDwOq12KcBHz59SsdGRkZUUIpLCzMjkaj2RMIAdywHisDUKt6z/MWknwGIJlOezFLzz2SWl3ty4be3rcyvpxeUsIGI9RvsekvAtjjeX4egPlGuB7Aie/fh7X/bqquublZEomEZF45blgrN8ucaTs1KYFjq8SXSeaRvDnZS1HC64YbSBYZDr7qbJdh7cXThhsnIwyTvGFXqiR53vBqki9JtpCca1FrwVYCyDPnfwidHIaDKpskAOwzvILkPMNXAbwyrIOj6X8RuoT6futI3iW5n+Qxko9InrBrHrJgtv8vh1cyZxzJmSSXk1xmRQj0GtkBw9nj08YxCFkEm0luJLnJ8BqbQiprSW4BsMrO3CK5NyB1CYMhWWJz76BOEpIqR0geNQl0O52bLHdn6V8DdjJxfw+ZejeHvwFV6oUyJfEkcAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/ef056235aca9334a8d234c4b8acf9a50/1c9ce/audit.png","srcSet":"/static/ef056235aca9334a8d234c4b8acf9a50/1c9ce/audit.png 64w,\\n/static/ef056235aca9334a8d234c4b8acf9a50/bf8e1/audit.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/ef056235aca9334a8d234c4b8acf9a50/8257c/audit.webp 64w,\\n/static/ef056235aca9334a8d234c4b8acf9a50/6766a/audit.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')},4921:function(e){e.exports=JSON.parse('{"layout":"fixed","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAB0ElEQVQ4y52UX0tVURDFz73XekglJAIfIiTJhxIsoiITTAShPxJUpEYlaRShgQ8alFCUFkRPFUQ99NBX8M0vt34xsPZlOiX32oHhzN579tprZtbeVVX7gE7WKL6kquOXg+1flfQCWAfOe74N2i1g0/8AeQ+MSboIfAdu5ZhuAMvpp4DPOV1JPcAP4NB+Um46rbvAgsEOSAoLkE1Jo6WeXQE6eA64bSYx1/L8BnDufwBngSf2W2k+anpiP4ANszqeatjjfy/wLbHtTjKJzUfgTpp/CTwurIu0Ogm56SaEfzC6Kinks22rUhka9f1VTRZ53A8cs38FuGD/5D9i/wZMjGLzdeAnMOX1o8Bhx90DvgIzwHidTB3wA/AaWAKG08mDwJGySVKwXQY+AWt/3JxUh7PAlsUb4z5gxAAPJU3ab9XS/CJpsJ1yCZA0ZzGXwBvAW689kzSTmpEBn0uaKCzziauSpu2P1jatuGYltajnaY+fAtfKjcp3dyUBvUlarFzTS6mzIfpN+/PAzcI+M4zivgImJO36cQhWl4FfwLtYAyYlrQI7wBk/abNtwNSUId+CRUmP7C/bYrwkKZgu2u5LegCEjAZyU6q9hJo6vudaff03rYQFxo0rlKIAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/24221a93d9bdd15176666a45aebd4cf5/1c9ce/socialsec.png","srcSet":"/static/24221a93d9bdd15176666a45aebd4cf5/1c9ce/socialsec.png 64w,\\n/static/24221a93d9bdd15176666a45aebd4cf5/bf8e1/socialsec.png 128w","sizes":"64px"},"sources":[{"srcSet":"/static/24221a93d9bdd15176666a45aebd4cf5/8257c/socialsec.webp 64w,\\n/static/24221a93d9bdd15176666a45aebd4cf5/6766a/socialsec.webp 128w","type":"image/webp","sizes":"64px"}]},"width":64,"height":64}')}}]);
//# sourceMappingURL=component---src-pages-services-tsx-0b55bf059ef694120d3f.js.map