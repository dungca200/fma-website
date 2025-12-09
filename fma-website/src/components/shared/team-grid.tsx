"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainer,
  staggerItem,
  teamCardImage,
  teamOverlay,
  viewportConfig,
} from "@/lib/animations";
import { Linkedin, Mail } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio?: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn("group relative", className)}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative overflow-hidden rounded-card-lg bg-card shadow-card"
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          {member.image ? (
            <motion.img
              src={member.image}
              alt={member.name}
              variants={teamCardImage}
              className="h-full w-full object-cover"
            />
          ) : (
            <motion.div
              variants={teamCardImage}
              className="h-full w-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
            >
              <span className="font-display text-6xl font-bold text-primary/30">
                {member.name.charAt(0)}
              </span>
            </motion.div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Hover content overlay */}
          <motion.div
            variants={teamOverlay}
            className="absolute inset-x-0 bottom-0 p-6"
          >
            {/* Bio */}
            {member.bio && (
              <p className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-3">
                {member.bio}
              </p>
            )}

            {/* Social links */}
            <div className="flex gap-3">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Info - always visible */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.position}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface TeamGridProps {
  members: TeamMember[];
  className?: string;
}

export function TeamGrid({ members, className }: TeamGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {members.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </motion.div>
  );
}

// Featured team member card (larger, horizontal layout)
interface FeaturedTeamCardProps {
  member: TeamMember;
  className?: string;
}

export function FeaturedTeamCard({ member, className }: FeaturedTeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.6 }}
      className={cn(
        "group relative bg-card rounded-card-xl shadow-card overflow-hidden",
        className
      )}
    >
      <div className="grid md:grid-cols-2 gap-0">
        {/* Image */}
        <div className="relative aspect-square md:aspect-auto overflow-hidden">
          {member.image ? (
            <motion.img
              src={member.image}
              alt={member.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-cover image-grayscale"
            />
          ) : (
            <div className="h-full w-full min-h-[300px] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="font-display text-8xl font-bold text-primary/20">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            {member.position}
          </div>
          <h3 className="text-display-sm font-display mb-4">{member.name}</h3>
          {member.bio && (
            <p className="text-muted-foreground leading-relaxed mb-6">
              {member.bio}
            </p>
          )}

          {/* Social links */}
          <div className="flex gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors animated-underline"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors animated-underline"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamGrid;
