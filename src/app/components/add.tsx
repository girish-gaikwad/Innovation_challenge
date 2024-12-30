import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Award, Book, PocketKnife, Star, ArrowRight, Eye } from 'lucide-react';

const WorkshopEvents = () => {
  const [hoveredEvent, setHoveredEvent] =  useState<number | null>(null);

  const workshops = [
    {
      id: 1,
      title: "Pottery Mastery",
      date: "Every Saturday",
      time: "10:00 AM - 1:00 PM",
      location: "Main Studio",
      capacity: "8 seats",
      image: "./workshop1.png",
      description: "Master the art of pottery with hands-on experience in wheel throwing and hand building techniques."
    },
    {
      id: 2,
      title: "Sculpting Basics",
      date: "Every Sunday",
      time: "2:00 PM - 5:00 PM",
      location: "Workshop Room",
      capacity: "6 seats",
      image: "./workshop2.png",
      description: "Learn fundamental sculpting techniques using various materials and tools."
    },
    {
      id: 3,
      title: "Ceramic Painting",
      date: "Every Wednesday",
      time: "6:00 PM - 8:00 PM",
      location: "Art Studio",
      capacity: "10 seats",
      image: "./workshop3.png",
      description: "Explore ceramic painting techniques from traditional to contemporary styles."
    }
  ];

  // Background pattern animation
  const patternVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%'],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse" as const, // Add the 'as const' assertion
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        variants={patternVariants}
        animate="animate"
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #8B4513 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 relative"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#3E2723] mb-4"
          >
            Upcoming Workshop Events
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            className="h-1 bg-[#8B4513] mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg relative z-10"
                style={{
                  boxShadow: '0 4px 20px rgba(139, 69, 19, 0.1)'
                }}
              >
                <motion.div
                  className="relative h-48 overflow-hidden"
                  onHoverStart={() => setHoveredEvent(workshop.id)}
                  onHoverEnd={() => setHoveredEvent(null)}
                >
                  <motion.img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredEvent === workshop.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 0.7 }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 text-white"
                  >
                    <p className="text-sm">{workshop.description}</p>
                  </motion.div>
                </motion.div>

                <div className="p-6 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40px" }}
                    className="h-1 bg-[#8B4513] mb-4 rounded-full"
                  />
                  <h3 className="text-xl font-bold text-[#3E2723] mb-4">{workshop.title}</h3>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {[
                      { icon: Calendar, text: workshop.date },
                      { icon: Clock, text: workshop.time },
                      { icon: MapPin, text: workshop.location },
                      { icon: Users, text: workshop.capacity }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-[#8B4513]"
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6 w-full py-3 bg-[#8B4513] text-white rounded-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Reserve Spot
                      <motion.span
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-[#3E2723]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Decorative background elements */}
              <motion.div
                className="absolute -inset-2 bg-[#8B4513]/5 rounded-xl -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};




const ArtisanSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);  
    const skills = [
      {
        id: 1,
        title: "Master Pottery",
        level: "Advanced",
        experience: "15+ years",
        projects: "1000+",
        icon: PocketKnife,
        percentage: 95
      },
      {
        id: 2,
        title: "Ceramic Design",
        level: "Expert",
        experience: "12+ years",
        projects: "800+",
        icon: Star,
        percentage: 90
      },
      {
        id: 3,
        title: "Art History",
        level: "Professional",
        experience: "10+ years",
        projects: "500+",
        icon: Book,
        percentage: 85
      },
      {
        id: 4,
        title: "Teaching",
        level: "Master",
        experience: "8+ years",
        projects: "300+",
        icon: Award,
        percentage: 88
      }
    ];
  
    return (
        <div className="py-20 bg-[#3E2723] text-white relative overflow-hidden">
        {/* Animated background pattern */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(45deg, #8B4513 1px, transparent 1px), linear-gradient(-45deg, #8B4513 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-4"
            >
              Artisan Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              className="h-1 bg-[#8B4513] mx-auto rounded-full"
            />
          </motion.div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredSkill(skill.id)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group"
              >
                {/* Glowing background effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#8B4513] to-[#D2691E] opacity-75 group-hover:opacity-100 rounded-xl blur"
                  animate={{
                    opacity: hoveredSkill === skill.id ? 0.9 : 0.5
                  }}
                />
      
                <motion.div
                  className="relative bg-[#1a1a1a] rounded-xl p-6 h-full"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>
      
                  <h3 className="text-xl font-bold text-center mb-4">{skill.title}</h3>
      
                  <motion.div className="space-y-4">
                    {[
                      { label: "Level", value: skill.level },
                      { label: "Experience", value: skill.experience },
                      { label: "Projects", value: skill.projects }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="relative"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-400">{item.label}</span>
                          <span className="font-medium">{item.value}</span>
                        </div>
                        <motion.div
                          className="h-1 bg-[#8B4513]/20 rounded-full overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#8B4513] to-[#D2691E]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                          />
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
      
                  {/* Interactive view details button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full py-2 bg-gradient-to-r from-[#8B4513] to-[#D2691E] rounded-lg flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Eye className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
    );
  };
  

const AdditionalSections = () => {
  return (
    <div>
      <WorkshopEvents />
      <ArtisanSkills />
    </div>
  );
};

export default AdditionalSections;
