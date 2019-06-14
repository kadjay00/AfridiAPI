import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_BALANCE_PICTODEF', {schema: 'dbo' } )
export class T_BALANCE_PICTODEF {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 10,
        name: 'BPD_PICCODE_C',
        })
    public BPD_PICCODE_C: string;

    @Column('varchar', {
        nullable: true,
        name: 'BPD_DESCRIPTION_C',
        })
    public BPD_DESCRIPTION_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'BPD_BITMAP_C',
        })
    public BPD_BITMAP_C: string | null;

}
