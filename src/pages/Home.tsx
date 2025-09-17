import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GraduationCap, TrendingUp, Users } from "lucide-react";
import logo from "@/assets/logo.png";

interface College {
  name: string;
  district: string;
  ranking: number;
  cutoff: Record<string, number>;
  placements: { average: string; highest: string };
  img: string;
  site: string;
}

const colleges: College[] = [
  {
    name: "College of Engineering Pune (COEP)",
    district: "Pune",
    ranking: 1,
    cutoff: { CSE: 99.6, IT: 97.8, Mechanical: 95.2, AIML: 99.6 },
    placements: { average: "8 LPA", highest: "50 LPA" },
    img: "https://th.bing.com/th/id/R.7879a90ee339b5015e87864cb224b160?rik=BXeRgtFMBEn3Wg&riu=http%3a%2f%2fi2.wp.com%2fwww.campustimespune.com%2fwp-content%2fuploads%2f2015%2f06%2fcoep-pune-campus-pics.jpg%3fresize%3d588%252C391&ehk=fUYi1eSOi0MUZzSFdEkk7QYnXOaHzZt4INSMfV2K0Ks%3d&risl=&pid=ImgRaw&r=0",
    site: "https://www.coep.org.in/"
  },
  {
    name: "Pune Institute of Computer Technology (PICT)",
    district: "Pune",
    ranking: 2,
    cutoff: { CSE: 99.6, IT: 96.9, ENTC: 95.8, AIDS: 99.5 },
    placements: { average: "7 LPA", highest: "44 LPA" },
    img: "https://tse3.mm.bing.net/th/id/OIP.-YFT1U3JOhQbZRQw1ZiRowHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://pict.edu/"
  },
  {
    name: "Vishwakarma Institute of Technology (VIT Pune)",
    district: "Pune",
    ranking: 3,
    cutoff: { CSE: 96.7, IT: 95.9, Mechanical: 93.5, AIDS: 98.0 },
    placements: { average: "6.5 LPA", highest: "41 LPA" },
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20241220170538941535/Vishwakarma-Institute-of-Technology.webp",
    site: "https://www.vit.edu/"
  },
  {
    name: "MIT World Peace University (MIT-WPU)",
    district: "Pune",
    ranking: 4,
    cutoff: { CSE: 95.2, IT: 94.5, Mechanical: 92.1, AIDS: 95.6 },
    placements: { average: "5.8 LPA", highest: "35 LPA" },
    img: "https://tse4.mm.bing.net/th/id/OIP.gRRt6ZKyEgoh0rHWnsyLkQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    site: "https://mitwpu.edu.in/"
  },
  {
    name: "Bharati Vidyapeeth College of Engineering (BVCOE Pune)",
    district: "Pune",
    ranking: 5,
    cutoff: { CSE: 94.8, IT: 93.6, ENTC: 91.5, AIML: 93.9 },
    placements: { average: "5 LPA", highest: "30 LPA" },
    img: "https://th.bing.com/th/id/R.0917073d56d2a5d8901eee2a89c7128d?rik=0OPVLMdH%2bHeY5w&riu=http%3a%2f%2fcoewpune.bharatividyapeeth.edu%2fmedia%2fimages%2fcoewpune_homepage.jpg&ehk=M1NCsorlKC6JLPGgDnwOPeaZSd%2bKYWlzCFWyC8cqyaA%3d&risl=&pid=ImgRaw&r=0",
    site: "https://bvcoe.bharatividyapeeth.edu/"
  },
  {
    name: "Sinhgad College of Engineering (SCOE Pune)",
    district: "Pune",
    ranking: 6,
    cutoff: { CSE: 93.2, IT: 92.5, Mechanical: 90.8 },
    placements: { average: "4.8 LPA", highest: "28 LPA" },
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3075/2018/7/16/Sinhgad-College-of-Engineering-Pune-Campus6.jpg",
    site: "http://scoe.sinhgad.edu/"
  }
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [visibleColleges, setVisibleColleges] = useState(6);

  const districts = useMemo(() => {
    return Array.from(new Set(colleges.map(college => college.district)));
  }, []);

  const filteredColleges = useMemo(() => {
    return colleges.filter(college => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDistrict = !selectedDistrict || college.district === selectedDistrict;
      return matchesSearch && matchesDistrict;
    });
  }, [searchTerm, selectedDistrict]);

  useEffect(() => {
    setVisibleColleges(6);
  }, [searchTerm, selectedDistrict]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-gradient h-96 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl px-6 content-fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={logo} alt="College Finder" className="w-16 h-16 animate-bounce-gentle" />
            <h1 className="text-5xl font-bold text-shadow-lg">Find Your Dream College</h1>
          </div>
          <p className="text-xl mb-8 text-white/90">
            Search by name and filter by district to find the best colleges for your future.
          </p>
          <Button variant="hero" size="lg" className="animate-pulse-glow">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Input
              type="text"
              placeholder="Search college name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm transition-all duration-300 focus:shadow-lg"
            />
            <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
              <SelectTrigger className="max-w-xs transition-all duration-300 focus:shadow-lg">
                <SelectValue placeholder="All Districts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Districts</SelectItem>
                {districts.map(district => (
                  <SelectItem key={district} value={district}>{district}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Colleges Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.slice(0, visibleColleges).map((college, index) => (
            <Card 
              key={college.name}
              className="group hover:shadow-xl transition-all duration-500 border-l-4 border-l-accent card-fade-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={college.img} 
                  alt={college.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
                    Rank #{college.ranking}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                  {college.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {college.district}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Avg: {college.placements.average}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-highlight" />
                    High: {college.placements.highest}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {Object.entries(college.cutoff).slice(0, 3).map(([branch, cutoff]) => (
                    <Badge key={branch} variant="outline" className="text-xs">
                      {branch}: {cutoff}%
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="college" 
                  className="w-full group"
                  asChild
                >
                  <a href={college.site} target="_blank" rel="noopener noreferrer">
                    View Details
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {visibleColleges < filteredColleges.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setVisibleColleges(prev => prev + 6)}
              className="hover:scale-105 transition-transform duration-300"
            >
              Show More Colleges
            </Button>
          </div>
        )}

        {filteredColleges.length === 0 && (
          <div className="text-center py-16">
            <GraduationCap className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;