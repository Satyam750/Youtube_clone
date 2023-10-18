import { Stack } from "@mui/material"
import { categories } from "../utiles/constants"
import { SvgIcon } from '@mui/material';


const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack 
    direction="row"
    sx={{overflowY:"auto", height:{sx:'auto',md:'92%'},
    flexDirection:{md:'column'}
    }}
    >
    {categories.map((category)=>(
      <button className="category-btn" style={{background: category.name === selectedCategory && '#FC1503', color:'white'}} 
      key={category.name}
      onClick={()=>setSelectedCategory(category.name)}
      >
        <SvgIcon component={category.icon} style={{color:category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'}}/> 
        <span style={{opacity:category.name === selectedCategory ? '1' :'0.8'}}>{category.name}</span>
        
      </button>
    ))}
    
      
    </Stack>
  )
}

export default Sidebar
