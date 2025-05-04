import { Button, ButtonGroup, Steps, Input } from "@chakra-ui/react"
import { NativeSelect } from "@chakra-ui/react"
import * as React from "react";

const Onboarding = () => {
  return (

    <Steps.Root defaultStep={0} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {steps.map((step, index) => (
      <React.Fragment key={index}>
      { index === 0 && (
        <Steps.Content index={index}>
          {step.description}
            <Input placeholder = "Wallet Address"/>
        </Steps.Content>
      )}
      { index === 1 && (
        <Steps.Content index={index}>
          {step.description}
<NativeSelect.Root>
  <NativeSelect.Field>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
        </Steps.Content>
              )}
        { index === 2 && (      
        <Steps.Content index={index}>
          {step.description}
<NativeSelect.Root>
  <NativeSelect.Field>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </NativeSelect.Field>
  <NativeSelect.Indicator />
</NativeSelect.Root>
        </Steps.Content>
        )}
        </React.Fragment>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>
<Button size="sm" variant="outline" color="white" bg="black">Submit</Button>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Wallet address",
    description: "Enter your wallet address",
  },
  {
    title: "Select chain",
    description: "Select the chain where you will receive tokens",
  },
  {
    title: "Select token",
    description: "Select token in which you will recieve payment",
  },
]


export default Onboarding;
