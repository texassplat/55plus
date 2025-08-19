const { MongoClient } = require('mongodb');

// Sample data for seeding the database
const sampleData = {
  articles: [
    {
      title: 'Kitchen Design Trends for 2024: Creating a Space You\'ll Love',
      slug: 'kitchen-design-trends-2024',
      excerpt: 'Discover the latest kitchen design trends that combine style, functionality, and accessibility for the modern 55+ homeowner.',
      content: 'Full article content would go here...',
      category: 'inspired-living',
      subcategory: 'kitchen-design',
      author: 'Sarah Johnson',
      publishedAt: new Date('2024-01-15'),
      status: 'published',
      featured: true,
      readTime: 8,
      tags: ['kitchen design', 'home improvement', 'trends', 'accessibility'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Weekend Getaways Within 3 Hours of DFW: Your Perfect Escape',
      slug: 'weekend-getaways-dfw',
      excerpt: 'Explore beautiful destinations perfect for weekend trips, all within easy driving distance of the Dallas-Fort Worth metroplex.',
      content: 'Full article content would go here...',
      category: 'travel',
      subcategory: 'weekend-getaways',
      author: 'Michael Chen',
      publishedAt: new Date('2024-01-12'),
      status: 'published',
      featured: true,
      readTime: 12,
      tags: ['travel', 'weekend trips', 'DFW', 'local adventures'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  events: [
    {
      title: 'Spring Garden & Landscape Show',
      description: 'Discover the latest trends in gardening and landscaping perfect for creating your dream outdoor space.',
      startDate: new Date('2024-03-15T09:00:00'),
      endDate: new Date('2024-03-17T17:00:00'),
      location: {
        name: 'Dallas Arboretum',
        address: '8525 Garland Rd',
        city: 'Dallas',
        state: 'TX',
        zipCode: '75218'
      },
      category: 'entertainment',
      subcategory: 'garden-show',
      price: {
        min: 15,
        max: 25,
        currency: 'USD'
      },
      accessibility: {
        wheelchairAccessible: true,
        hearingAssistance: false,
        visualAssistance: true,
        other: ['large print materials', 'guided tours']
      },
      source: 'manual',
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  users: [
    {
      email: 'admin@55plus.com',
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  communityAdvocates: [
    {
      name: 'Dr. Margaret Rodriguez',
      title: 'Senior Health Advocate',
      bio: 'Dedicated to improving healthcare access and quality for seniors in the DFW area.',
      expertise: ['Healthcare Access', 'Medicare Navigation', 'Wellness Programs'],
      featured: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]
};

async function seedDatabase() {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/55plus';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('55plus');

    // Clear existing collections
    console.log('Clearing existing collections...');
    await db.collection('articles').deleteMany({});
    await db.collection('events').deleteMany({});
    await db.collection('users').deleteMany({});
    await db.collection('communityAdvocates').deleteMany({});

    // Insert sample data
    console.log('Inserting sample data...');
    
    if (sampleData.articles.length > 0) {
      const articlesResult = await db.collection('articles').insertMany(sampleData.articles);
      console.log(`Inserted ${articlesResult.insertedCount} articles`);
    }

    if (sampleData.events.length > 0) {
      const eventsResult = await db.collection('events').insertMany(sampleData.events);
      console.log(`Inserted ${eventsResult.insertedCount} events`);
    }

    if (sampleData.users.length > 0) {
      const usersResult = await db.collection('users').insertMany(sampleData.users);
      console.log(`Inserted ${usersResult.insertedCount} users`);
    }

    if (sampleData.communityAdvocates.length > 0) {
      const advocatesResult = await db.collection('communityAdvocates').insertMany(sampleData.communityAdvocates);
      console.log(`Inserted ${advocatesResult.insertedCount} community advocates`);
    }

    console.log('Database seeding completed successfully!');
    console.log('\nSample data includes:');
    console.log('- Articles: Home improvement and travel content');
    console.log('- Events: Local events with accessibility information');
    console.log('- Users: Admin user account');
    console.log('- Community Advocates: Health and community resources');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('Database connection closed');
  }
}

// Run the seeding function
seedDatabase().catch(console.error);
