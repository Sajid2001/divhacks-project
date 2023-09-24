import {
    Box,
    Button,
    Spacer,
    Container,
    Image,
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
            <Flex bg='blue.400'>
            <Box flexDir={'row'} display={'flex'} p='4' bg='blue.400'>
                <Text fontWeight={'bold'} textColor={'white'} fontSize='3xl'><Link href='/'>Cost Minus Drugs</Link></Text>
                <Image borderRadius={'xl'} marginLeft={3} height={'12'} src = {'https://static.vecteezy.com/system/resources/thumbnails/005/386/380/small/drug-logo-health-logo-vector.jpg'}/>
            </Box>
            <Spacer/>
            {isDesktop ? (
                <Flex justify="space-between" flex="1">
                <Spacer/>
                <HStack spacing="3">
                    <Button textColor={'white'} variant="tertiary"><Link href='/'>Home</Link></Button>
                    <Button textColor={'white'} variant="tertiary"><Link href='/medications'>Medications</Link></Button>
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