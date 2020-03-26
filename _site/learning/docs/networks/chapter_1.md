# Chapter 1

## What is a computer network ?

A medium in which each entity (device) can share and/or receive a resource via a **connection link**.
Connection links could be copper wires, optic fiber cables, radiowaves (WiFi) and so on. To understand each other, **Protocols** set a common understanding among these devices in the communication.

## The Internet

can be described in two ways:  

1. what it is composed of (nuts and bolts) 
2. how it is layed-out  (infrastructure)

### Nuts-and-bolts

The Internet is a computer network that **interconnects** billions of computers (devices) around the world which are called **hosts** or **end systems**.

These end systems are connected by **connection links** (e.g: copper wire, fiber, radio) and **packet switches**. When an end-system A decides to sent data to end-system B, first the data is decomposed into several chunks and a **header** is added to each chunk resulting in a **packet**, which is sent to B where it gets assembled again to form the original data. 

The connection links (e.g: cables, fibers, or radio spectrum) are limited with a **transmission rate** (bit-rate or data-rate) which is measured in bits/second.  

#### **Packet switch**  

Takes a packet from an incoming communication-link and deliver it to an outgoing communication-link. The **route** or **path** is the journey of switches and connection links in which a packet takes to arrive to its destination. 
There are two types of packet switches:

1. **Router**: typically found at the core of the network, It forwards a packet to the destination end-system through networks using IP address. To do so, It consults its routing table to find the appropriate outbound communication-link, these routing tables are obtained using *routing protocols*; which can also determine the optimal path (in distance and cost). 
2. **Link-layer switch**: provides access to a network, minimize costs and simplifies connection; removes the burden of linking each end-system to another end-system with a link. they operate under the link layer. Connected to a router to communicate with other networks.

#### A good analogy

1. Packet = Truck
2. Communication-link = Roads & highways
3. Switches = Intersections 
4. End-systems = Warehouses

End-systems access the internet through **Internet Service Providers (ISP)**, these ISPs are in turn are composed of communication-links, link-layer switches, and routers. ISPs are connected with other national and internationl upper-tier ISPs with high speed routers and optic-fiber communication links.

End-systems and the core of the internet confirm to **Protocols** during communication to specify sending and receiving of data, **Internet Standards** are consensus protocols to inter-cooperate different devices. which are documented in **request for comments (RFC)** documents. 

### Infrastructure

Looking at the Internet from another perspective, as an "infrastructure" to the **distributed applications** (e.g: http, mail, etc...) that runs over the end-systems and utilize **socket interface**  a set of rules specifies how these applications should interact over the Internet.



### Internet Protocols

A protocol is a set of agreements between communication parties, specifies the *format*, and order (sequence) of the exchanged messages. And the resulting actions upon receiving a message or an event.  

For example when humans interact, one can ask for the time by first saying "hi", the other person might reply with a greeting "hi" or might not even reply (didn't hear the sender, ignorant, etc...) in which case the other person would not proceed with a question, otherwise he would ask "what is the time ?", a reply with answer might come. 

The same is applicable to networks; to visit a webpage for example, your computer must first establish a connection with the server, after which you would ask the server to give you the webpage file, and it would be returned to you afterwards.  

![1567506306587](/home/js/.config/Typora/typora-user-images/1567506306587.png) 

## The Network Edge

Internet can be decomposed into two folds: 

1. Core Network: switches and routers.
2. Edge Network: connected devices.

The edge of the network is where devices (servers, computers, smart-phones, fridges, etc...) reside hence the name **end-systems**. Also called **hosts** because they "host" an application (web browser or server, email browser or server, etc...)

Hosts can be further subdivided into:

1. **Client**: Computer requesting a service (PCs, smartphones, laptops)
2. **Servers**: Powerful computers that serve clients requests. 

### 1.2.1 Access Network

End-systems can be connected to the Internet via an *edge-router*. can come in many flavors notably: 

1. **Digital-subscriber-line** (DSL): translates digital data to high frequency tones via a modem to be transmitted through a telephone line to the ISP's central office where they are decoded again to digital format by a [Digital subscriber line access multiplexer](https://en.wikipedia.org/wiki/Digital_subscriber_line_access_multiplexer) (DSLAM). The DSL link carries the telephone signals at 0-4 kHz, upstream 4-50 kHz, downstream 50 kHz - 1 MHz. Hence the connection is asymmetrical since upstream < downstream.  
2. Cable Internet Access: encoding digital data into a TV cable same idea as above.
3. Fiber to the home (FTTH).

### 1.2.2

TBC

 

## The Internet Core

### Packet switching

An application message is broken down into chunks called **packets**, they are forwarded to the destination through communication-links and switches, while a packet is being received by a switch its stored (buffered) in the switch before being sent to the next outbound link when it has been fully received, a technique called **[store-and-forward](https://en.wikipedia.org/wiki/Store_and_forward)**. 
Assuming the packet is of length *L* bits and and communication-link transmission rate is *R*, then the time it takes to send a packet from source end-system/switch to another end-system/switch is *L/R*.

#### Sending a packet through N switches

Without considering other delays, the time (in s) it takes for a packet of length *L* (bits) to be sent through *N* communication-links each having *R* ( (bits/s) transmission rate is: 
$$
N(L/R)
$$

### Circuit switching 

Unlike packet switching where a link is shared between multiple devices, in circuit switching the resources (link and buffer) are dedicated to two end-points during the connection session.
It is sometimes inefficient since the full capacity of a communication-link is not utilized, but it is faster since there are no queues, the sender can send data at the speed of the allocated transmission rate.  

### 1.3.3

TBC

## Delay, Loss, and Throughput

Total nodal delay = nodal processing delay + queuing delay + transmission delay + propagation delay

### Nodal processing delay

The time it takes to process a packet; to calculate the header, check errors and determine the next outbound link, which is then queued there.

### Queuing delay

A packet is queued (stored) if the communication-link is occupied sending another packet. it will wait for its turn in the queue before being sent, this waiting time is called queuing delay and is variable to the earlier packets waiting for their turns; it increases if faced with high traffic. if the queue is empty, the queue delay is 0. 

### Transmission delay 

The amount of time for an end-system/router to load (push) a packet into the communication-link. 
it is dependent on both transmission rate *R* (bits/sec) and the packet length *L* (bits). i.e: L/R.

### Propagation delay

Time it takes to send a bit through a communication-link, depends on the speed of the medium *s* (meters/second) (approx. the speed of light) and the length of the communication-link *d* (meters). 

### Queuing Delay and Packet Loss

If a packet arrives to a full queue then it would be dropped, 