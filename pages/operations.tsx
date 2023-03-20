import Layout from "../components/layout";
import { Card, Container, Spacer, Text } from '@nextui-org/react'

export default function Operations() {
  return (
    <Layout>
      <Text h3>Preferred Method of Communication</Text>
      <Text>Our preferred method of communication is discussion during class time. However, if work must be done outside of class we will communicate via a text group chat we have created.</Text>

      <Text h3>Team Work Allocation</Text>
      <Text>
        For the foreseeable future, allocation of duties will be permanent throughout, there will be no transference. This will allow each team member to acquire a deep understanding of their role, therefore, becoming more efficient at their task. In meetings each individual can share important details they’ve learned in optimizing their work.
      </Text>

      <Container css={{
        display: 'flex',
        gap: '10px',
        marginTop: '20px',
        marginBottom: '20px'
      }}>
        <Card isHoverable variant="bordered" css={{maxW: '250px'}}>
          <Card.Body>
            <Text h5>Chase Roth</Text>
            <Text>In charge of providing a website deliverable and assisting the document editing process.</Text>
          </Card.Body>
        </Card>

        <Card isHoverable variant="bordered" css={{maxW: '250px'}}>
          <Card.Body>
            <Text h5>Philip Bezas</Text>
            <Text>In charge of submitting our group’s work on a weekly basis in addition to working on assignments throughout the week. </Text>
          </Card.Body>
        </Card>

        <Card isHoverable variant="bordered" css={{maxW: '250px'}}>
          <Card.Body>
            <Text h5>Michael Bobin</Text>
            <Text>Responsible for making sure our ideas are presented clearly and consistently in each of our submissions. Looking at the way we present our thought.
            </Text>
          </Card.Body>
        </Card>

        <Card isHoverable variant="bordered" css={{maxW: '250px'}}>
          <Card.Body>
            <Text h5>Johnathan Freebern</Text>
            <Text>In charge of note taking during lectures and on group discussions.</Text>
          </Card.Body>
        </Card>

        <Card isHoverable variant="bordered" css={{maxW: '250px'}}>
          <Card.Body>
            <Text h5>Steven Giallanza</Text>
            <Text>I’ll be in charge of editing and revising our group deliverable each week to make sure it is ready for submission.</Text>
          </Card.Body>
        </Card>
      </Container>

      <Spacer />
      <Text h3>Team Risks & Mitigation Plan</Text>
      <ol>
        <li>
          <Text>
            When a person misses a meeting, they will be notified of any decisions via text and/or email and will be expected to still be prepared for the next class. However, if a more pressing issue arises, requiring an immediate response, the urgency will be included in the message. Failure to respond will result in them being omitted from the majority vote.
          </Text>
        </li>
        <li>
          <Text>
            In the chance a team member is unavailable for multiple meetings (e.g. a family emergency), our team will focus on completing all tasks that do not require important decisions first. Essentially, ensure all parallel processes are completed to a point before major decisions are needed. If this is not possible or all other tasks are completed, the
            remaining team members will reach a consensus on how to proceed.
          </Text>
        </li>
      </ol>

      <Text h3>System of Checks and Balances</Text>
      <ol>
        <li>
          <Text>
            Consensus is our first choice decision-making policy. If this doesn’t work we will then move on to a majority vote. In a worse case, Philip, our CEO, will make the decision.
          </Text>
        </li>
        <li>
          <Text>
            Deliverables will be submitted by our CEO, Philip, followed by Johnathan and then any team member available.
          </Text>
        </li>
      </ol>

    </Layout>
  )
}