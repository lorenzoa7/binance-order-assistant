import { Orders } from '@/components/information/orders'
import { Positions } from '@/components/information/positions'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function Information() {
  return (
    <div className="m-auto flex flex-col justify-center gap-6">
      <Tabs
        defaultValue="positions"
        className="flex w-[720px] flex-col items-center justify-center"
      >
        <TabsList>
          <TabsTrigger value="positions">Open positions</TabsTrigger>
          <TabsTrigger value="orders">Open orders</TabsTrigger>
        </TabsList>
        <TabsContent value="positions" className="mt-0">
          <Positions />
        </TabsContent>
        <TabsContent value="orders" className="mt-0">
          <Orders />
        </TabsContent>
      </Tabs>
    </div>
  )
}
