import {  Flex,  IconButton, Spacer, Text, Box, useBreakpointValue, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

const Header = () => {

    const isDesktop = useBreakpointValue({ base: false, lg: true })


    return (
        
        <div>
            <Flex bg='#1D3557'>
            <Box p='4' bg='#457B9D'>
                <Text fontSize='3xl'>Cost Minus</Text>
            </Box>
            <Spacer/>
            {isDesktop ? (
                <Box p='4' bg='#457B9D'>
                    <a href="/home"></a>
                    <a href="/medication"></a>
                    <a href="/orders"></a>
                </Box>
            )
            :(
            <Box p='4' bg='#457B9D'>
            <Menu>
                <MenuButton
                as={IconButton}
                aria-label='Options'
                
                variant='outline'
                />
                <MenuList>
                    <MenuItem command='⌘T'>
                        New Tab
                    </MenuItem>
                    <MenuItem command='⌘N'>
                         New Window
                    </MenuItem>
                    <MenuItem command='⌘⇧N'>
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem command='⌘O'>
                        Open File...
                    </MenuItem>                    
                </MenuList>
            </Menu>
            </Box>
            )
        }
        
        </Flex>
        <Box h='300px' bg="#A8DADC">
            
        </Box>
        <Box h='100px' bg="#457B9D">
            
        </Box>
        </div>
      )
    }

 
export default Header;