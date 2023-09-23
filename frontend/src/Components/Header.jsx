import {
    Box,
    Button,
    Spacer,
    Container,
    Text,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import { Link } from '@chakra-ui/react'

const Header = () => {

    const isDesktop = useBreakpointValue({ base: false, lg: true })



    return (
        
        <div>
            <Flex bg='#1D3557'>
            <Box p='4' bg='blue.400'>
                <Text fontWeight={'bold'} textColor={'white'} fontSize='3xl'>Cost Minus</Text>
            </Box>
            <Spacer/>
            {isDesktop ? (
                <Flex justify="space-between" flex="1">
                <Spacer/>
                <HStack spacing="3">
                    
                    <Button textColor={'white'} variant="tertiary"><Link href='/orders'>Orders</Link></Button>
                    <Button textColor={'white'} variant="tertiary"><Link href='/signin'>Sign in</Link></Button>
                    <Button textColor={'white'}  variant="primary"><Link href='/signup'>Sign Up</Link></Button>

                   
                </HStack>
              </Flex>
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
        </div>
      )
    }

 
export default Header;