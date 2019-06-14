import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICEART', {schema: 'dbo' } )
export class T_PRICEART {

    @PrimaryGeneratedColumn({
        type: 'numeric',
        // precision:9,
        // scale:0,
        name: 'PAH_ID_N',
        })
    public PAH_ID_N: number;

    @Column('datetime', {
        nullable: true,
        name: 'PAH_START_DAT',
        })
    public PAH_START_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'PAH_END_DAT',
        })
    public PAH_END_DAT: Date | null;

    @Column('smallint', {
        nullable: true,
        name: 'PAH_SESSIONS_N',
        })
    public PAH_SESSIONS_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PAH_ARTICLES_N',
        })
    public PAH_ARTICLES_N: number | null;

    @Column('smallint', {
        nullable: true,
        name: 'PAH_REJECTED_N',
        })
    public PAH_REJECTED_N: number | null;

    @Column('tinyint', {
        nullable: true,
        name: 'PAH_RC_N',
        })
    public PAH_RC_N: number | null;

}
