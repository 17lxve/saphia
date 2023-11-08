import React from 'react'
import * as Tabs from '@radix-ui/react-tabs';


type Props = {
    title:string
    trigger: Array<{ key: string, title: string }>
    content:Array<{ key: string, val: JSX.Element }>
}

function TabComponent({title, trigger, content}:Props) {
    return (
      <>
            <Tabs.Root className='TabsRoot' defaultValue={`tab ${trigger[0].key}`}>
                <Tabs.List className='TabsList' aria-label={title}>
                    {trigger.map((el) => (
                        <Tabs.Trigger className='TabsTrigger' key={el.key} value={`tab ${el.key}`}>{el.title}</Tabs.Trigger>
                    ))}
                </Tabs.List>
                {content.map((el) => (
                    <Tabs.Content className='TabsContent' key={el.key} value={`tab ${el.key}`}>{el.val}</Tabs.Content>
                ))}
            </Tabs.Root>
      </>
    )
  }
export default TabComponent