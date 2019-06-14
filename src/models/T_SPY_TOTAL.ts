import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SPY_TOTAL', {schema: 'dbo' } )
export class T_SPY_TOTAL {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'SPT_GROUP_C',
        })
    public SPT_GROUP_C: string;

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 35,
        name: 'SPT_SHEET_C',
        })
    public SPT_SHEET_C: string;

    @Column('numeric', {
        nullable: true,
        scale: 0,
        name: 'SPT_COUNT_N',
        })
    public SPT_COUNT_N: number | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPT_FIRSTUSE_DAT',
        })
    public SPT_FIRSTUSE_DAT: Date | null;

    @Column('datetime', {
        nullable: true,
        name: 'SPT_LASTUSE_DAT',
        })
    public SPT_LASTUSE_DAT: Date | null;

}
